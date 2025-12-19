// app/components/InternationalServices.tsx
"use client";

import {
  Plane,
  FileText,
  Hotel,
  Users,
  MapPinned,
  Headset,
} from "lucide-react";

const services = [
  {
    title: "Tour Packages",
    description: "Carefully planned international tours for families and groups.",
    icon: Plane,
  },
  {
    title: "Visa Assistance",
    description: "End-to-end visa guidance with proper documentation support.",
    icon: FileText,
  },
  {
    title: "Flights & Hotels",
    description: "Reliable flight bookings and comfortable hotel arrangements.",
    icon: Hotel,
  },
  {
    title: "Group Tours",
    description: "Well-managed group travel experiences with expert coordination.",
    icon: Users,
  },
  {
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored to your needs and preferences.",
    icon: MapPinned,
  },
  {
    title: "Travel Support",
    description: "Assistance before, during, and after your international journey.",
    icon: Headset,
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Our International Services
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Everything you need for a smooth international travel experience
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              {/* Icon */}
              <Icon className="h-6 w-6 text-yellow-600 mb-4" />

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
