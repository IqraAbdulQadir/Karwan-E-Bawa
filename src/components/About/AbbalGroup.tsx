"use client";

export default function AbbalGroup() {
  return (
    <section className="bg-[#0b0b0b] py-20 px-4 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Abbal Group of Companies
        </h2>

        {/* Gold divider */}
        <div className="mt-4 flex justify-center">
          <span className="h-[2px] w-20 bg-yellow-500"></span>
        </div>

        {/* Paragraph */}
        <p className="mt-8 text-gray-300 text-lg leading-relaxed">
          Established in 2002, Abbal Group of Companies has successfully managed and
          operated over 25 travel agencies, laying a strong foundation in the travel
          and tourism sector. Today, the group continues its journey with six active
          travel companies, alongside ventures in construction, agriculture, and
          emerging technology. Guided by ethical business practices and long-term
          vision, Abbal Group remains committed to sustainable growth across
          industries.
        </p>

        {/* Subtle divider */}
        <div className="mt-12 h-px w-full bg-gray-800"></div>

         

        {/* Single horizontal logos image */}
<div className="mt-12">
  <img
    src="/images/logoss.png"
    alt="Abbal Group Logos"
    className="mx-auto w-full max-w-4xl h-80 md:h-84 object-contain"
  />
</div>

{/* Logos */}
        {/* <div className="mt-30 grid grid-cols-2 sm:grid-cols-4 gap-10 items-center">
          <img
            src="/logos/karwan-e-bawa.png"
            alt="Karwan-e-Bawa"
            className="mx-auto max-h-14 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
          />

          <img
            src="/images/canada.png"
            alt="Abbal Builders"
            className="mx-auto max-h-14 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
          />

          <img
            src="/logos/abbal-dairy.png"
            alt="Abbal Cattle and Dairy Farm"
            className="mx-auto max-h-14 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
          />

          <img
            src="/logos/abbal-it.png"
            alt="Abbal IT Solutions"
            className="mx-auto max-h-14 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
          />
        </div> */}

      </div>
    </section>
  );
}
