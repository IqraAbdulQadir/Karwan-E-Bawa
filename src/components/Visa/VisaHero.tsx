"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisaHero() {
  return (
    <section
      role="banner"
      className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/visa11.jpg" // Replace with your travel/passport/airplane image
          alt="Travel documents and airplane background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated Passport Stamp Behind Text */}
      <motion.div
        initial={{ scale: 0, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 35 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-32 h-32 sm:w-48 sm:h-48"
      >
        <Image
          src="/images/passport stamp.png" // Replace with your stamp image
          alt="Passport stamp"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3">
          Visa Assistance Made Easy
        </h1>
        <p className="text-base sm:text-xl md:text-2xl mb-1">
          Fast, reliable, and stress-free visa processing with Karwan e Bawa.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-yellow-300">
          Documentation support • Expert guidance • Multi-visa types
        </p>
      </div>
    </section>
  );
}
