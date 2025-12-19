
// "use client";

// import { motion } from "framer-motion";

// export default function TourHero() {
//   return (
//     <section className="relative h-[30vh] w-full flex items-center justify-center">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/travel3.jpg')",
//         }}
//       ></div>

//       {/* Light overlay */}
//       <div className="absolute inset-0 bg-white/20"></div>

//       {/* Text content */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative text-center px-4"
//       >
//         <p className="text-sm md:text-base text-gray-700 mb-2">International Travel</p>
//         <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2">
//           Explore the World with Ease
//         </h1>
//         <p className="text-sm md:text-lg text-gray-700">
//           Hand-crafted global tours by Karwan e Bawa
//         </p>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function TourHero() {
  return (
    <section className="relative h-[30vh] w-full flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/travel3.jpg')",
        }}
      ></div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4"
      >
        <p className="text-sm md:text-base text-white mb-2">International Travel</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-yellow-400 mb-2">
          Explore the World with Ease
        </h1>
        <p className="text-sm md:text-lg text-white">
          Hand-crafted global tours by Karwan e Bawa
        </p>
      </motion.div>
    </section>
  );
}
