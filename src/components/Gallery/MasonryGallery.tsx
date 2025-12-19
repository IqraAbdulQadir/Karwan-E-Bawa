"use client";

import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  images: ImageItem[];
  onImageClick: (index: number) => void;
}

export default function MasonryGallery({ images, onImageClick }: MasonryGalleryProps) {
  return (
    <div className="px-4 py-10">
      <div
        className="
          columns-1
          sm:columns-2
          md:columns-3
          lg:columns-4
          gap-4
        "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer transition hover:opacity-90"
            onClick={() => onImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={700}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
