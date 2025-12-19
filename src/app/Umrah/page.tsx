"use client";

import Hero from "@/components/Umrah/hero";
import {WhyUs}  from "@/components/Umrah/WhyUs";
import { Packages } from "@/components/Umrah/Packages";
import { Services } from "@/components/Umrah/Services";
import { Verse } from "@/components/Umrah/verse"
import { Process } from "@/components/Umrah/Process"
import { Blog } from "@/components/Umrah/Blog"
import { ClosingCTA } from "@/components/Umrah/ClosingCTA"

export default function UmrahPage() {
  return (
    <div className="min-h-screen">
<Hero />
<WhyUs />
<Services />
<Verse />
<Packages />
<Process />
<Blog />
<ClosingCTA />
      
    </div>
  );
}