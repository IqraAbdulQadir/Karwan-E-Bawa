"use client";

import ContactHero from "@/components/Contact/ContactHero";
import AddressCard from "@/components/Contact/AddressCard";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/MapEmbed"

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">
      <ContactHero />
      <AddressCard />
      <ContactForm />
      <Map />

      {/* Rest of your contact page */}
    </div>
  );
}
