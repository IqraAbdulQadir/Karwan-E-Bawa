// "use client";

// import Image from "next/image";

// export default function EVisaPost() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Optional Section Title */}
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           E-Visa Services
//         </h2>

//         {/* Post Image */}
//         <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
//           <Image
//             src="/images/evisa.jpg" // replace with your post image
//             alt="E-Visa Services"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const eVisaCountries = [
  { name: "UAE", flag: "/images/uae.webp" },
  { name: "Thailand", flag: "/images/thailand.jpg" },
  { name: "Bahrain", flag: "/images/bahrain.png" },
  { name: "Malaysia", flag: "/images/malaysia.png" },
  { name: "Singapore", flag: "/images/singapore.png" },
  { name: "Baku", flag: "/images/azerbaijan.png" },
  { name: "Indonesia", flag: "/images/indonesia.png" },
  { name: "Siri Lanka", flag: "/images/sirilanka.png" },
];

export default function EVisaPost() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          E-Visa Countries
        </h2>

        <div
          className="
            flex gap-6 overflow-x-auto no-scrollbar py-6 px-1
            scroll-snap-x scroll-snap-mandatory
          "
        >
          {eVisaCountries.map((country, index) => (
            <motion.div
              key={index}
              className="
                min-w-[220px] h-[300px] rounded-3xl p-6
                flex flex-col items-center justify-center
                scroll-snap-center relative backdrop-blur-lg
                bg-yellow-600 border border-white/30
                shadow-xl -rotate-3 hover:rotate-0 hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Flag */}
              <div className="relative w-28 h-28 mb-5">
                <Image
                  src={country.flag}
                  alt={country.name}
                  fill
                  className="object-cover rounded-full border border-white shadow-lg"
                />
              </div>

              {/* Country Name */}
              <h3 className="text-lg font-semibold tracking-wide text-black">
                {country.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
