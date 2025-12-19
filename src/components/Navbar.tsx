'use client'
import { useState} from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <nav className="w-full text-yellow-500 shadow-md sticky top-0 z-50 bg-black ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

       {/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <img src="/images/logo.png" alt="Logo" className="h-10 w-7" />
  <div className="flex flex-col leading-none">
    <span className="text-xl font-semibold text-yellow-500">KARWAN-E-BAWA</span>
    <span className="text-xs font-bold text-gray-300">-----------Pvt (Ltd)------------</span>
  </div>
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/Umrah" className="hover:text-white transition">Umrah</Link>
          <Link href="/Tours" className="hover:text-white transition">International Tours</Link>
          <Link href="/Visa" className="hover:text-white transition">Visa</Link>
          <Link href="/Blog" className="hover:text-white transition">Blog</Link>
          <Link href="/Gallery" className="hover:text-white transition">Gallery</Link>
          <Link href="/About" className="hover:text-white transition">About</Link>
          <Link href="/Contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">Home</Link>
          <Link href="/Umrah" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">Umrah</Link>
          <Link href="/Tours" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">International Tours</Link>
          <Link href="/Visa" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">Visa</Link>
          <Link href="/Blog" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">Blog</Link>
          <Link href="/Gallery" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">Gallery</Link>
          <Link href="/About" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">About</Link>
          <Link href="/Contact" onClick={() => setMenuOpen(false)} className="block hover:text-white transition">Contact</Link>
        </div>
      )}
    </nav>
  )
}
