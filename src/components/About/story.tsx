"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="bg-gray-950 py-24 px-4 md:px-24 overflow-hidden">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-wide">
          Karwan-e-Bawa
        </h2>

        <p className="mt-2 text-lg md:text-xl text-[#d4af37] font-medium tracking-wider">
          Since 2013
        </p>

        {/* Divider */}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="block h-[2px] bg-[#d4af37] mx-auto mt-4"
        />
      </motion.div>

      {/* Story Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center text-gray-400 text-lg md:text-xl leading-relaxed"
      >
        Founded in 2013, Karwan-e-Bawa began its journey with a simple yet powerful
        vision — to guide travelers with honesty, care, and commitment. Over the
        decades, we have grown from a modest travel service into a trusted name for
        Umrah journeys and international travel experiences.
        <br /><br />
        With a deep understanding of spiritual travel and a strong foundation in
        global tourism, Karwan-e-Bawa continues to serve pilgrims and travelers with
        excellence, comfort, and reliability — staying true to the values on which
        it was built.
      </motion.p>

      {/* Images */}
      {/* <div className="mt-14 flex flex-wrap justify-center gap-6">
        {[1, 2].map((img, index) => (
          <motion.img
            key={img}
            src={`/images/history${img}.jpg`}
            alt="Karwan-e-Bawa history"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-72 h-44 object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500"
          />
        ))}
      </div> */}

    </section>
  );
}
