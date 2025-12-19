"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    img: "/images/slide12.jpg",
    title: "Discover the World With Us",
    subtitle: "International Tours & Luxury Travel",
  },
  {
    id: 2,
    img: "/images/slide22.jpg",
    title: "Blessed Journey Awaits",
    subtitle: "Exclusive Umrah Packages",
  },
  {
    id: 3,
    img: "/images/slide3.jpg",
    title: "Comfort for Every Journey",
    subtitle: "Choose from 1-star to 5-star hotels worldwide, tailored to your needs",
  },
    {
    id: 4,
    img: "/images/visa1.jpg",
    title: "Fast & Reliable Visa Assistance",
    subtitle: "Hassle-free visa processing with expert guidance every step of the way.",
  },
    {
    id: 5,
    img: "/images/blog.jpg",
    title: "Umrah & Travel Insights ",
    subtitle: "Your guide to umrah education and smart travel",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.img}
            alt="Hero Slide"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white/90 mt-3 text-lg md:text-xl drop-shadow-lg">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 
        bg-black/40 hover:bg-black/60 text-white p-2 rounded-full 
        transition z-20"
      >
        <ChevronLeft size={28} />
      </Button>

      {/* Right Arrow */}
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 
        bg-black/40 hover:bg-black/60 text-white p-2 rounded-full 
        transition z-20"
      >
        <ChevronRight size={28} />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, idx) => (
          <Button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition rounded-full ${
              idx === activeIndex
                ? "w-3 h-3 bg-white"
                : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
