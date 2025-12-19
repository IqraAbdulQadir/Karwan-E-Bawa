'use client'
import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="w-full bg-black text-yellow-500 border-b border-[#333]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1 ">

        {/* Moving Text */}
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <p className="text-sm text-yellow-500 animate-marquee">
            Welcome to Karwan-e-Bawa • Trusted Travel Services • Exclusive Umrah Packages • Best Rates Guaranteed • Call Us Anytime •
          </p>
        </div>

        {/* CTA Button */}
        <Link href="https://wa.me/923368494525?text=Hello%2C%20I%20would%20like%20to%20contact%20you" target="_blank">
        <button className="ml-6 whitespace-nowrap text-black bg-yellow-500 px-4 rounded-md text-sm font-semibold hover:bg-yellow-400 transition">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
}
