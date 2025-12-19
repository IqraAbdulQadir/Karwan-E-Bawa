"use client";

import { motion } from "framer-motion";

interface GalleryHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function GalleryHero({
  title = "Our Journey in Photos",
  subtitle = "Moments of peace, devotion & togetherness",
  image = "/images/gallery-hero.jpg",
}: GalleryHeroProps) {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-3 max-w-xl text-lg md:text-xl opacity-90">{subtitle}</p>
      </motion.div>

      {/* Wave Shape (Bottom Curve) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-[80px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,80 C240,20 480,20 720,80 C960,140 1200,140 1440,80 L1440,200 L0,200 Z"
          />
        </svg>
      </div>
    </div>
  );
}
