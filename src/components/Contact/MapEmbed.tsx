"use client";

export default function ContactMap() {
  return (
    <div className="w-full mt-12">
      <h2 className="text-center text-2xl font-semibold text-yellow-500 mb-4">
        Find Us on the Map
      </h2>

      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-yellow-500/40 shadow-[0_0_20px_rgba(255,215,0,0.18)]">
        <iframe
          title="Karwan e Bawa Travel Agency Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.138199001526!2d67.06486257369507!3d24.878562477917416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eeb2870260d%3A0x98bf9b83ae99ed54!2sTai%20Roshan%20Trade%20Center%20-%20RTC!5e0!3m2!1sen!2sus!4v1764877964877!5m2!1sen!2sus" 
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
