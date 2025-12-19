"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; alt?: string };

interface LightboxProps {
  images: MediaItem[];
  index: number; // initial index (non-null)
  onClose: () => void;
  onIndexChange?: (newIndex: number) => void; // optional
  loop?: boolean;
}

export default function Lightbox({ images, index, onClose, onIndexChange, loop = true }: LightboxProps) {
  const [current, setCurrent] = useState<number>(index);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const startX = useRef<number | null>(null);
  const dragging = useRef(false);

  // sync if parent changes initial index before mount (rare):
  useEffect(() => setCurrent(index), [index]);

  // Notify parent of index changes asynchronously to avoid setState during render
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onIndexChange?.(current);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [current, onIndexChange]);

  // prevent body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Pause video when switching items
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      // small delay to allow autoplay when switching if needed:
      setTimeout(() => {
        try {
          videoRef.current?.play().catch(() => {
            /* autoplay may be blocked; that's fine */
          });
        } catch {}
      }, 120);
    }
  }, [current]);

  // Keyboard handlers
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]); // eslint-disable-line

  function next() {
    setCurrent((prev) => {
      const isLast = prev === images.length - 1;
      const newIndex = isLast ? (loop ? 0 : prev) : prev + 1;
      onIndexChange?.(newIndex);
      return newIndex;
    });
  }

  function prev() {
    setCurrent((prev) => {
      const isFirst = prev === 0;
      const newIndex = isFirst ? (loop ? images.length - 1 : prev) : prev - 1;
      onIndexChange?.(newIndex);
      return newIndex;
    });
  }

  function onBackdropClick(e: React.MouseEvent) {
    // close when clicking outside the content container
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  // Touch/swipe handlers (basic)
  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
    dragging.current = true;
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!dragging.current || startX.current === null) return;
    const dx = e.touches[0].clientX - startX.current;
    // if swipe distance > threshold, navigate
    const threshold = 50;
    if (dx > threshold) {
      dragging.current = false;
      prev();
    } else if (dx < -threshold) {
      dragging.current = false;
      next();
    }
  }
  function onTouchEnd() {
    dragging.current = false;
    startX.current = null;
  }

  const item = images[current];

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        ref={backdropRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onBackdropClick}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      >
        {/* Close Button */}
        <button
          aria-label="Close"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous"
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next"
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content */}
        <motion.div
          ref={contentRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative z-30 max-w-[90vw] max-h-[86vh] w-full flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-full max-h-full flex items-center justify-center p-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.src + current}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                >
                  {item.type === "image" ? (
                    <div className="relative max-w-[95vw] max-h-[80vh] w-auto">
                      <Image
                        src={item.src}
                        alt={item.alt ?? ""}
                        width={1200}
                        height={900}
                        className="object-contain rounded-lg"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="max-w-[95vw] max-h-[80vh] w-auto">
                      <video
                        ref={videoRef}
                        src={item.src}
                        controls
                        autoPlay
                        playsInline
                        className="max-w-full max-h-[80vh] rounded-lg object-contain"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Caption + Index */}
        <div className="absolute bottom-6 z-40 w-full px-6 text-center text-sm text-white/90">
          <div className="mx-auto inline-block rounded-md bg-black/40 px-3 py-2 backdrop-blur-md">
            <span>{(item as any).alt ?? ""}</span>
            <span className="mx-2 opacity-60">•</span>
            <span>
              {current + 1} / {images.length}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
