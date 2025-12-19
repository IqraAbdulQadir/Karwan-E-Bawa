"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  photo: string;
  text: string;
  rating?: number; // optional star rating
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  photos: string[];
}

export default function TestimonialsSection({ testimonials, photos }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[current];

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Testimonials Carousel */}
        <div className="flex-1 relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center md:text-left"
            >
              <p className="text-gray-700 text-lg mb-4">"{currentTestimonial.text}"</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
                  {currentTestimonial.rating && (
                    <p className="text-yellow-500">{'★'.repeat(currentTestimonial.rating)}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2"
            >
              ‹
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2"
            >
              ›
            </button>
          </div>
        </div>

        {/* Photos Collage */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={photo}
                alt={`Pilgrim photo ${index + 1}`}
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
