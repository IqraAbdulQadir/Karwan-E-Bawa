"use client";

import { useState } from "react";
import GalleryHero from "@/components/Gallery/GalleryHero";
import MasonryGallery from "@/components/Gallery/MasonryGallery";
import Lightbox from "@/components/Gallery/Lightbox";
import TestimonialsSection from "@/components/Gallery/Testimonials";
import CTAButton from "@/components/Gallery/CTAButton";

const images: { type: "image"; src: string; alt: string }[] = [
  { type: "image", src: "/images/black makkah.jpg", alt: "Pilgrims at Haram" },
  { type: "image", src: "/images/black dubai.webp", alt: "Makkah view" },
  { type: "image", src: "/images/black-makkah.jpg", alt: "Madinah night" },
  { type: "image", src: "/images/gallery1.jpg", alt: "Madinah nigh" },
  { type: "image", src: "/images/gallery2.jpg", alt: "Madinah nightg" },
  { type: "image", src: "/images/gallery5.jpg", alt: "Madinah nightk" },
  { type: "image", src: "/images/gallery4.jpg", alt: "Madinah night f" },
  { type: "image", src: "/images/gallery6.jpg", alt: "Madinah nightxd" },
];

const testimonials = [
  {
    name: "Ahmad Khan",
    photo: "/images/testimonials/ahmad.jpg",
    text: "The journey was life-changing, everything organized beautifully.",
    rating: 5,
  },
  {
    name: "Sara Ali",
    photo: "/images/testimonials/sara.jpg",
    text: "Amazing experience, staff were very helpful and caring.",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    photo: "/images/testimonials/bilal.jpg",
    text: "I felt spiritually refreshed and everything went smoothly.",
    rating: 4,
  },
];

const testimonialPhotos = [
  "/images/testimonials/photo1.jpg",
  "/images/testimonials/photo2.jpg",
  "/images/testimonials/photo3.jpg",
  "/images/testimonials/photo4.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <GalleryHero
        title="Karwan e Bawa — Gallery"
        subtitle="Capturing the sacred journey of our blessed pilgrims"
        image="/images/slide12.jpg"
      />

      {/* Masonry Gallery */}
      <MasonryGallery
        images={images}
        onImageClick={(index) => setSelectedImage(index)}
      />

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          images={images}
          index={selectedImage}
          onClose={() => setSelectedImage(null)}
          onIndexChange={(newIndex) => setSelectedImage(newIndex)}
        />
      )}

      {/* Testimonials + Photos Section */}
      <TestimonialsSection
        testimonials={testimonials}
        photos={testimonialPhotos}
      />

      <CTAButton />


    </div>
  );
}
