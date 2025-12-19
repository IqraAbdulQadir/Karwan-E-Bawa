"use client";

export default function CertificationsSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-4 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Certifications & Accreditations
        </h2>

        {/* Gold divider */}
        <div className="mt-4 flex justify-center">
          <span className="h-[2px] w-20 bg-yellow-500"></span>
        </div>

        {/* Supporting text */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Official certifications and accreditations that reflect our compliance,
          credibility, and commitment to regulated travel services.
        </p>

        {/* Certificates */}
        <div className="mt-14 space-y-16">
          {/* Certificate 1 */}
          <div className="flex justify-center">
            <img
              src="/images/IATA.jpg"
              alt="IATA Accreditation Certificate"
              className="w-full max-w-3xl object-contain shadow-lg"
            />
          </div>

          {/* Certificate 2 */}
          <div className="flex justify-center">
            <img
              src="/certificates/umrah-license.jpg"
              alt="Umrah Travel Authorization Certificate"
              className="w-full max-w-3xl object-contain shadow-lg"
            />
          </div>

          {/* Certificate 3 */}
          <div className="flex justify-center">
            <img
              src="/images/DTS.jpg"
              alt="Registered Travel Agency Certificate"
              className="w-full max-w-3xl object-contain shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
