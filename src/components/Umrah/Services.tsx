"use client";

import { useState } from "react";

export function Services() {
  const [flipped, setFlipped] = useState<string | null>(null);

  const steps = [
    {
      number: "01",
      title: "Before You Leave",
      text: "We prepare you beyond documents. Guidance, clarity, and mental readiness so you depart with intention, not confusion. Every step is explained, every concern addressed — so your heart is at ease before the journey begins.",
    },
    {
      number: "02",
      title: "While You Are There",
      text: "Support that exists quietly in the background. Available when needed, absent when not — allowing your full presence in ibadah, reflection, and connection without administrative distractions.",
    },
    {
      number: "03",
      title: "When You Return",
      text: "Completion matters. We ensure your journey ends with ease, gratitude, and closure — not exhaustion. From feedback to follow-up, your experience is honored till the very end.",
    },
  ];

  const handleFlip = (id: string) => {
    setFlipped(flipped === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            How We Carry Your Amanah
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            This journey is a trust. We handle it with responsibility, restraint,
            and respect for its sacred nature.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => {
            const isFlipped = flipped === step.number;

            return (
              <div
                key={step.number}
                className="group perspective cursor-pointer"
                onClick={() => handleFlip(step.number)}
              >
                <div
                  className={`
                    relative h-80 w-full transition-transform duration-700
                    transform-style-preserve-3d
                    ${isFlipped ? "rotate-y-180" : ""}
                    md:group-hover:rotate-y-180
                  `}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black border border-black rounded-2xl p-8 backface-hidden flex flex-col justify-between">
                    <span className="text-6xl font-bold text-yellow-600">
                      {step.number}
                    </span>

                    <h3 className="text-2xl font-medium text-white flex items-center gap-2">
                      {step.title}
                      <span className="text-yellow-600 transition-transform duration-300 md:group-hover:translate-x-1">
                        →
                      </span>
                    </h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-black rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-4 text-yellow-600">
                      {step.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
