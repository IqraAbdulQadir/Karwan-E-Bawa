"use client";

import EVisaPost from "@/components/Visa/EVisaPost";
import TrustSection from "@/components/Visa/TrustSection";
import VisaCategories from "@/components/Visa/VisaCategories";
import VisaHero from "@/components/Visa/VisaHero";
import CTASection from "@/components/Visa/CTASection"
import Overlay from "@/components/Visa/overlay";
import VisaProcess from "@/components/Visa/VisaProcess";

export default function VisaPage() {
  return (
    <div className="min-h-screen">
<Overlay />
<VisaHero />
<TrustSection />
<VisaCategories />
<EVisaPost />
<VisaProcess />
<CTASection />
      {/* Rest of your contact page */}
    </div>
  );
}