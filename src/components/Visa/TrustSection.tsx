"use client";

import { CheckCircle, Clock, FileText, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: CheckCircle,
    title: "High Approval Rate",
    text: "Years of experience with embassy standards.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    text: "Priority handling wherever available.",
  },
  {
    icon: FileText,
    title: "Document Assistance",
    text: "We prepare and verify all paperwork.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    text: "We guide you from start to finish.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why We Are Trusted</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <item.icon className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
