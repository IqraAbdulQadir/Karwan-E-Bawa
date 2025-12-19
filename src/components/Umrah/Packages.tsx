export function Packages() {
  const packages = [
    {
      title: "Economy Umrah",
      image: "/images/Umrah Pack1.jpeg",
    },
    {
      title: "Standard Umrah",
      image: "/images/Umrah Pack3.jpeg",
    },
    {
      title: "Premium Umrah",
      image: "/images/Umrah Pack4.jpeg",
    },
    {
      title: "Premium Umrah",
      image: "/images/Umrah Pack2.jpeg",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Umrah Paths
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Thoughtfully arranged paths. More options can be added as your journey expands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group relative h-[600px] md:h-[680px] rounded-3xl overflow-hidden shadow-none"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}