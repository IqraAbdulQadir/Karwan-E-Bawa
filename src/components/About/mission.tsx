"use client";

export default function MissionSection() {
  return (
    <section className="py-20 px-4 md:px-24 bg-gradient-to-b from-black/90 to-[#1a051f]/90">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 relative inline-block">
        Our Mission
        <span className="block h-1 w-20 bg-yellow-500 mt-2 mx-auto rounded"></span>
      </h2>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Optional Icon / Illustration */}
        <div className="flex-shrink-0">
          <img
            src="/images/mission-icon.png" // replace with Kaaba, globe, or airplane icon
            alt="Mission Icon"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0"
          />
        </div>

        {/* Text */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Karwan-e-Bawa was founded to guide every traveler on journeys of faith and exploration. 
          We specialize in seamless Umrah experiences while offering world-class international tours, 
          ensuring comfort, care, and unforgettable memories. 
          As a proud part of the Abbal Group of Companies, we are committed to providing trustworthy, 
          personalized, and spiritually enriching travel experiences for every pilgrim and traveler.
        </p>
      </div>
    </section>
  );
}
