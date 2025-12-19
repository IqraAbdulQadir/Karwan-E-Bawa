"use client";

import Image from "next/image";

export default function MediaSection() {
  return (
    <section className="bg-white py-24 px-4 md:px-24">
      {/* Text */}
      <div className="max-w-3xl mb-14 text-center mx-auto">

        <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
          Our Workspace
        </p>
        <h2 className="text-black text-3xl md:text-5xl font-semibold mt-2">
          Where Journeys Begin
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Step inside the heart of Karwan-e-Bawa — where every itinerary,
          visa, and pilgrimage is carefully planned with dedication,
          expertise, and trust.
        </p>
      </div>

      {/* Collage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Images */}
        <div className="md:col-span-3 flex md:flex-col gap-6">
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src="/images/office1.jpeg"
              alt="Office view"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              alt="Team discussion"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Main Video */}
<div className="md:col-span-6 relative rounded-2xl overflow-hidden shadow-lg h-[260px] md:h-[420px]">
  <video
    src="/images/officevid.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-contain bg-black"

  />
</div>


        {/* Right Images */}
        <div className="md:col-span-3 flex md:flex-col gap-6">
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src="/images/office3.jpeg"
              alt="Reception area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              alt="Workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
