// app/components/InternationalPackages.tsx
"use client";

const packages = [
  {
    title: "Turkey Special",
    image: "/images/post2.jpeg",
  },
  {
    title: "Dubai Luxury",
    image: "/images/poster.jpeg",
  },
  {
    title: "Malaysia Explorer",
    image: "/images/post3.jpeg",
  },
];

export default function Posters() {
  return (
    <section className="bg-gray-250 py-16 px-4">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          International Packages
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Curated travel experiences designed for comfort and discovery
        </p>
      </div>

      {/* Posters Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl shadow-sm bg-white transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* A4-like ratio */}
            <div className="aspect-[3/4] w-full">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
