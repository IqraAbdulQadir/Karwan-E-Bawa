"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const videos = [
  { title: "Baku", src: "/images/baku1.mp4" },
  { title: "Dubai", src: "/images/dubai.mp4" },
  { title: "Malaysia", src: "/images/malaysia.mp4" },
  { title: "Turkey", src: "/images/turkey.mp4" },
  { title: "Qatar", src: "/images/qatar.mp4" },
  { title: "Thailand", src: "/images/thailand.mp4" },
  { title: "Maldives", src: "/images/maldives.mp4" },
  { title: "Singapore", src: "/images/singapore.mp4" },
  { title: "Sri Lanka", src: "/images/srilanka.mp4" },
];

export default function TourCarousel() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
  if (typeof window === "undefined") return;

  const isTouchDevice =
    window.matchMedia("(hover: none)").matches;

  if (!isTouchDevice) return; // ⛔ desktop exits here

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.6 }
  );

  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => observer.disconnect();
}, []);


  return (
    <section className="py-10 px-4 bg-black">
      <div className="flex overflow-x-auto overflow-y-hidden gap-3 snap-x snap-mandatory whitespace-nowrap no-scrollbar">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="group relative w-[140px] md:w-[170px] lg:w-[190px] flex-shrink-0 snap-start rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <video
        ref={(el) => {
    videoRefs.current[index] = el;
  }}
  src={video.src}
  className="w-full h-[300px] md:h-[350px] lg:h-[380px] object-cover"
  muted
  loop
  playsInline
  preload="metadata"
  onMouseEnter={async (e) => {
    try {
      await e.currentTarget.play();
    } catch {}
  }}
  onMouseLeave={(e) => e.currentTarget.pause()}
/>


            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

            {/* Label */}
            <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
              {video.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
