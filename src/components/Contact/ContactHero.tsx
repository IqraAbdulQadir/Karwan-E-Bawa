"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <header className="relative w-full bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
      {/* --- Airplane dropping animation, larger size --- */}
      <motion.img
        src="/images/contact airplane2.png"
        alt="Paper Airplane"
        initial={{ y: -200, opacity: 0, rotate: -10 }}
        animate={{
          y: 0,
          opacity: 1,
          rotate: 0,
          transition: { type: "spring", stiffness: 60, damping: 12 }
        }}
        className="w-32 sm:w-48 md:w-64 lg:w-72 h-auto mb-4 sm:mb-6 select-none"
      />

      {/* --- “GET IN TOUCH” text: fade-in + slight slide, delayed after airplane lands --- */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 tracking-wide drop-shadow-lg text-center"
      >
        GET IN TOUCH
      </motion.h1>

      {/* --- Subtext: fade-in + slight slide, delayed after heading --- */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
        className="text-lg sm:text-xl md:text-2xl text-white/90 tracking-wide text-center mt-2 sm:mt-4"
      >
        Your first step towards exclusive packages!
      </motion.p>

      {/* Soft fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
    </header>
  );
}
