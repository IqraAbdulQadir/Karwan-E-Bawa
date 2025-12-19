"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactExpert() {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute inset-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
          Need Help With Your Visa?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Our expert team is available every day to guide you with fast and reliable visa support.
        </p>

        {/* CTA BUTTON */}
        <Link 
        href="https://wa.me/923368494525"
          target="_blank">
        <button
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all shadow-md"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp Our Expert
        </button>
        </Link>
      </motion.div>
    </section>
  );
}
