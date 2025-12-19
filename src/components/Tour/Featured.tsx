// app/components/FeaturedDestinations.tsx
"use client";

const destinations = [
  { name: "Dubia", image: "/images/black dubai.webp" },
  { name: "Turkey", image: "/images/turkeypic.png" },
  { name: "Baku", image: "/images/baku.jpg" },
  { name: "Malaysia", image: "/images/malaysia.jpg" },

];

export default function Featured() {
  return (
    <section className="bg-white py-14 px-4">
      {/* Heading — softened */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800">
          Featured Destinations
        </h2>
      </div>

      {/* Smaller, quieter grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* Image tile */}
            <div className="rounded-lg overflow-hidden border border-transparent hover:border-gray-800 transition-colors duration-200">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-[160px] object-cover"
              />
            </div>

            {/* Name below image */}
            <p className="text-sm text-gray-700 tracking-wide">
              {destination.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
