"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";

export default function Overlay() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={() => setIsVisible(false)}
      />

      {/* Floating Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative">
          <Link href="https://wa.me/923368494525" target="_blank" rel="noopener noreferrer">
            <button className="bg-black hover:bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Talk to an Expert
            </button>
          </Link>
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shadow-md"
            aria-label="Close overlay"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
