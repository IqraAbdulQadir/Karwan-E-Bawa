// app/components/SoftCTA.tsx
"use client";

export default function TourCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-gray-900 via-black to-gray-800 rounded-3xl p-12 shadow-xl">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          Your Next International Journey Starts Here
        </h2>

        {/* Supporting line */}
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Explore the world with Karwan e Bawa — effortless, curated, and unforgettable.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
