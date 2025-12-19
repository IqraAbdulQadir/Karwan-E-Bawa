"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d0d] to-black z-0" />

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)] z-0" />

      {/* Kaaba Silhouette */}
      <img
        src="/images/kaaba.png"
        alt="Kaaba"
        className="absolute bottom-0 left-8 w-72 md:w-[420px] opacity-10 grayscale z-0"
      />

      {/* Floating Gold Dust */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37] opacity-20 animate-[float_6s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-20 text-center px-6"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[0.35em] text-white mb-6">
          WHO │ WE │ ARE
          <span className="block h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4 rounded" />
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-[#E6C76A] mb-3">
          Your Companion in Faith & Exploration
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-8">
          Delivering refined Umrah journeys and global travel solutions with
          trust, dignity, and excellence.
        </p>

        {/* CTA */}
        <a
          href="/services"
          className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg font-medium tracking-wide hover:bg-[#D4AF37]/10 transition-all duration-300"
        >
          Explore Our Services
        </a>

        {/* Trust Line */}
        <p className="text-xs text-gray-500 mt-6">
          A Division of Abbal Group of Companies
        </p>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
