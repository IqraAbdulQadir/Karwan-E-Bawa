// app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-black">
      {/* Wave Borders */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="block w-full" viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            opacity="0.15"
            d="M0,0 C480,120 960,0 1440,120 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10"
        style={{ marginTop: "-10px" }}
      >
        <svg className="block w-full" viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            opacity="0.1"
            d="M0,0 C480,60 960,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hhh.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">

        {/* Karwan-e-Bawa — FULL WIDTH ON MOBILE */}
        <div className="col-span-full md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Karwan-e-Bawa Logo"
              width={40}
              height={40}
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-semibold text-yellow-500">
                KARWAN-E-BAWA
              </span>
              <span className="text-xs font-bold text-gray-300 tracking-wider">
                ------------Pvt (Ltd)----------
              </span>
            </div>
          </div>

          <p className="text-gray-300">
            Providing the best Umrah and travel services with care, trust, and
            professionalism. Experience a spiritual journey like never before.
          </p>
        </div>

        {/* MOBILE: 2 columns | DESKTOP: normal grid children */}
        <div className="grid grid-cols-2 gap-6 md:contents">

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/Umrah" className="hover:text-yellow-400">Umrah</Link></li>
              <li><Link href="/Tours" className="hover:text-yellow-400">International Tours</Link></li>
              <li><Link href="/Visa" className="hover:text-yellow-400">Visa</Link></li>
              <li><Link href="/Gallery" className="hover:text-yellow-400">Gallery</Link></li>
              <li><Link href="/About" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link href="/Contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Contact
            </h3>
            <p className="text-gray-300 mb-2">karwanebawapvt@gmail.com</p>
            <p className="text-gray-300 mb-4">+92 336 8494525</p>

            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-400">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700 text-center text-gray-400 py-4">
        © {new Date().getFullYear()} Karwan-e-Bawa. All rights reserved.
      </div>
    </footer>
  );
}
