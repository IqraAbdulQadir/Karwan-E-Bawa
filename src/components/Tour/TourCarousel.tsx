// app/components/VideoCarousel.tsx
"use client";

import { motion } from "framer-motion";

const videos = [
  { title: "Baku", src: "/images/baku.mp4" },
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
  return (
    <section className="py-10 px-4 bg-black">

      {/* FIXED: overflow-x-auto + overflow-y-hidden */}
      <div className="flex overflow-x-auto overflow-y-hidden gap-3 snap-x snap-mandatory whitespace-nowrap no-scrollbar">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="group relative w-[140px] md:w-[170px] lg:w-[190px] flex-shrink-0 snap-start rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            {/* Video */}
            <video
              src={video.src}
              className="w-full h-[300px] md:h-[350px] lg:h-[380px] object-cover"
              muted
              loop
              playsInline
              preload="auto"
              onMouseEnter={async (e) => { try { await e.currentTarget.play(); } catch {} }}
              onMouseLeave={(e) => e.currentTarget.pause()}
            ></video>

            {/* Subtle Overlay */}
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
