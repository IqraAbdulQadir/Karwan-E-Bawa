"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function VisaCategories() {
  const [selected, setSelected] = useState<any | null>(null);

  // =============================
  // MANUAL COUNTRY DATA (EDIT HERE)
  // =============================
  const COUNTRIES = [
    {
      name: "UAE",
      flag: "/images/uae.webp",
      requirements: "/images/dubai reqs.pdf",
    },
     {
      name: "Turkey",
      flag: "/images/turkey.png",
      requirements: "/images/turkey reqs.pdf",
    },
    {
      name: "Malaysia",
      flag: "/images/malaysia.png",
      requirements: "/images/malaysia reqs.pdf",
    },
     {
      name: "Australia",
      flag: "/images/australia.png",
      requirements: "/images/australia reqs.pdf",
    },
     {
      name: "Thailand",
      flag: "/images/thailand.jpg",
      requirements: "/images/thailand reqs.pdf",
    },
      {
      name: "Singapore",
      flag: "/images/singapore.png",
      requirements: "/images/singapore reqs.pdf",
    },
    {
      name: "Saudi Arabia",
      flag: "/images/saudi arabia.png",
      requirements: "/images/saudi reqs.pdf",
    },
   
    {
      name: "Qatar",
      flag: "/images/qatar.jpg",
      requirements: "/images/qatar reqs.pdf",
    },
    
    {
      name: "Bangladesh",
      flag: "/images/bangladesh.png",
      requirements: "/images/bangladesh reqs.pdf",
    },
   
    {
      name: "Bahrain",
      flag: "/images/bahrain.png",
      requirements: "/images/bahrain reqs.pdf",
    },
   
    {
      name: "Azerbaijan",
      flag: "/images/azerbaijan.png",
      requirements: "/images/thailand reqs.pdf",
    },
     {
      name: "Canada",
      flag: "/images/canada.png",
      requirements: "/images/canada reqs.pdf",
    },
     {
      name: "China",
      flag: "/images/china.png",
      requirements: "/images/china reqs.pdf",
    },
     {
      name: "Italy",
      flag: "/images/italy.png",
      requirements: "/images/italy reqs.pdf",
    },
     {
      name: "Japan",
      flag: "/images/japan.png",
      requirements: "/images/japan reqs.pdf",
    },
     {
      name: "Kenya",
      flag: "/images/kenya.png",
      requirements: "/images/kenya reqs.pdf",
    },
     {
      name: "Spain",
      flag: "/images/spain.png",
      requirements: "/images/spain reqs.pdf",
    },
     {
      name: "South Africa",
      flag: "/images/safrica.png",
      requirements: "/images/safrica reqs.pdf",
    },
   
     {
      name: "Sweden",
      flag: "/images/sweden.png",
      requirements: "/images/sweden reqs.pdf",
    },
     {
      name: "Germany",
      flag: "/images/germany.png",
      requirements: "/images/germany reqs.pdf",
    },
     {
      name: "USA",
      flag: "/images/usa.jpg",
      requirements: "/images/USA reqs.pdf",
    },
     {
      name: "UK",
      flag: "/images/uk.jpg",
      requirements: "/images/UK reqs.pdf",
    },
  ];
  

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Visa Categories
        </h2>

        <p className="text-gray-600 mb-12">
          Click a country to view the required documents.
        </p>

        {/* FLAG GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {COUNTRIES.map((c, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelected(c)}
            >
              {/* ROUND FLAG */}
              <div className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all">
                <Image
                  src={c.flag}
                  alt={c.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Country Name */}
              <p className="mt-3 font-semibold text-gray-800 text-lg">
                {c.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============================= */}
      {/* MODAL */}
      {/* ============================= */}
   <AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute right-4 top-4 text-xl font-bold text-gray-600 hover:text-black z-20"
          onClick={() => setSelected(null)}
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="px-6 pt-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            {selected.name} — Visa Requirements
          </h3>
        </div>

        {/* PDF Viewer */}
        <div className="px-6 py-4">
          <iframe
            src={selected.requirements}
            width="100%"
            height="800"
            className="border rounded-lg"
          />
        </div>

        {/* TALK TO EXPERT BUTTON */}
        <div className="px-6 pb-6">
          <a
            href="https://wa.me/923368494525"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Talk to Our Visa Expert
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
