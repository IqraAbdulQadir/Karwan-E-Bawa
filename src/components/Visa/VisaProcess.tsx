"use client";

import { motion } from "framer-motion";
import { UploadCloud, CheckCircle, Send, FileText } from "lucide-react";

const steps = [
  {
    title: "Submit Documents",
    desc: "Upload or send via WhatsApp/email.",
    icon: UploadCloud,
  },
  {
    title: "We Review & Prepare",
    desc: "Verification by our experts.",
    icon: CheckCircle,
  },
  {
    title: "Application Submission",
    desc: "Embassy/online submission.",
    icon: Send,
  },
  {
    title: "Approval & Delivery",
    desc: "Get visa PDF or sticker delivered.",
    icon: FileText,
  },
];

export default function VisaProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How the Process Works</h2>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center mb-12 md:mb-0 md:w-1/4 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Step Marker */}
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg z-10">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg">{step.title}</h3>
                {/* Description */}
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>

                {/* Vertical connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-12 bg-gray-300 mt-4"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
