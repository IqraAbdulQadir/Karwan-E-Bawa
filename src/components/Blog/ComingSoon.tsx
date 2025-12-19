"use client";

import { motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full text-center bg-black/40 backdrop-blur-md border border-zinc-700 rounded-2xl p-10 shadow-2xl"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-lg">
            <Clock className="h-8 w-8 text-black" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
          Blog Coming Soon
        </h1>

        {/* Subheading */}
        <p className="text-zinc-300 text-base leading-relaxed mb-8">
          We’re preparing meaningful travel stories, Umrah guides, and insights
          to help you plan better journeys with <span className="text-yellow-500 font-medium">Karwan e Bawa</span>.
        </p>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-8" />

        {/* Optional notification hint */}
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
          <Mail className="h-4 w-4 text-yellow-500" />
          <span>Updates will be announced soon</span>
        </div>
      </motion.div>
    </div>
  );
}
