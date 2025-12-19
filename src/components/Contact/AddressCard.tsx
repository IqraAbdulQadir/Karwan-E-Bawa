
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function AddressCard() {
  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⛑️ Avoid SSR, prevent mismatches

  return (
    <section className="w-full bg-black py-16 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          max-w-2xl w-full 
          bg-black/40 backdrop-blur-md 
          border border-yellow-500/40 
          rounded-2xl 
          shadow-[0_0_25px_rgba(255,215,0,0.18)]
          p-8 md:p-12 
          text-center
        "
      >
        {/* Floating Pin Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <MapPin className="text-yellow-500 w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-yellow-500 tracking-widest mb-4"
        >
          OUR OFFICE
        </motion.h2>

        {/* Address Lines */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Office # 209, 2nd Floor,<br />
          Tai Roshan Trade Center,<br />
          Shaheed e Millat Road, Karachi, Pakistan.
        </motion.p>

        {/* Contact Info */}
        <div className="mt-8 space-y-4">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-gray-200"
          >
            <Phone className="w-6 h-6 text-yellow-500" />
            <span className="text-lg">+92 336 8494525</span>
            <span className="text-lg">+92 330 6910005</span>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-gray-200"
          >
            <Mail className="w-6 h-6 text-yellow-500" />
            <span className="text-lg">karwanebawapvt@gmail.com</span>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-gray-200"
          >
            <Clock className="w-6 h-6 text-yellow-500" />
            <span className="text-lg">Mon–Sat: 10:00 AM – 11:00 PM</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
