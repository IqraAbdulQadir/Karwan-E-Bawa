"use client";

import Link from "next/link";

export default function CTAButton() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 py-20 text-center ">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Ready for Your Blessed Journey?
      </h2>
      <p className="text-lg md:text-xl mb-8 text-white">
        Book your Umrah with Karwan e Bawa and experience a spiritually uplifting journey.
      </p>
      <Link
        href="/Contact"
        className="inline-block bg-black text-yellow-500 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Book Now
      </Link>
    </section>
  );
}
