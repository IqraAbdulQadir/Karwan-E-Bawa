"use client";

import { ShieldCheck, HeartHandshake, Star, Globe, Lightbulb } from "lucide-react";

export default function Values() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Our Values
          </h2>

          {/* Gold divider */}
          <div className="mt-4 flex justify-center">
            <span className="h-[2px] w-20 bg-yellow-500"></span>
          </div>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            The principles that guide every journey we plan and every service we deliver.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-center">
          {/* Value 1 */}
          <div>
            <ShieldCheck className="mx-auto h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-black">Integrity</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Honest guidance and transparent service at every step.
            </p>
          </div>

          {/* Value 2 */}
          <div>
            <HeartHandshake className="mx-auto h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-black">Care</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Every traveler and pilgrim is treated with respect and empathy.
            </p>
          </div>

          {/* Value 3 */}
          <div>
            <Star className="mx-auto h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-black">Excellence</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Commitment to quality, comfort, and reliable service.
            </p>
          </div>

          {/* Value 4 */}
          <div>
            <Globe className="mx-auto h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-black">Responsibility</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Ethical practices and responsibility toward people and places.
            </p>
          </div>

          {/* Value 5 */}
          <div>
            <Lightbulb className="mx-auto h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-semibold text-black">Progress</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Embracing innovation while honoring tradition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
