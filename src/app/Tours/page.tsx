"use client";

import TourCarousel from "@/components/Tour/TourCarousel";
import TourHero from "@/components/Tour/TourHero";
import Featured from "@/components/Tour/Featured"
import Posters from "@/components/Tour/Posters"
import Services from "@/components/Tour/Services";
import TourCTA from "@/components/Tour/TourCTA"

export default function TourPage() {
  return (
    <div className="min-h-screen">

      <TourHero />
      <TourCarousel />
      <Featured /> 
      <Posters />
      <Services />
      <TourCTA />

    </div>
  )
}