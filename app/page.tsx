
'use client';
import FeatureText from "@/components/feature-text";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position and limit the effect
      const scrollY = window.scrollY;
      // Adjust the divisor for parallax strength
      const offset = Math.min(scrollY / 3, 120);
      setParallax(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4" style={{ fontFamily: 'General Sans, sans-serif' }}>
      <h1
        className="text-center text-black mb-6 leading-tight"
        style={{
          fontFamily: 'General Sans, sans-serif',
          fontWeight: 500,
          fontSize: '68px',
          lineHeight: 1.1,
        }}
      >
        Stuck Behind a Badly Parked Car? <br className="hidden sm:block" />Just Tap, Notify & Go.
      </h1>
      <p
        className="text-center text-gray-500 max-w-xl mb-8"
        style={{
          fontFamily: 'General Sans, sans-serif',
          fontWeight: 500,
          fontSize: '23px',
          lineHeight: 1.4,
        }}
      >
        Let Me Go is a free app that instantly connects you to the owner of the vehicle blocking your way. No honking, no waiting, no stress.
      </p>
      <Link
        href="https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 rounded-full bg-[#1a23c3] text-white font-semibold text-base shadow-md hover:bg-[#111a9c] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a23c3] mb-12"
      >
        Download Free App <span className="ml-2">→</span>
      </Link>

  {/* Images arrangement */}
  <div className="relative flex items-center justify-center w-full max-w-3xl min-h-[420px] mx-auto mt-32" style={{height: '420px'}}>
        {/* Left background shape */}
        <img
          src="/1.png"
          alt="Background shape left"
          className="absolute left-0 top-1/2 w-40 sm:w-56 md:w-64 z-0 transition-transform duration-300"
          style={{
            zIndex: 0,
            transform: `translateY(-${70 + parallax * 0.5}%)`
          }}
        />
        {/* Right background shape */}
        <img
          src="/2.png"
          alt="Background shape right"
          className="absolute right-0 top-1/2 w-40 sm:w-56 md:w-64 z-0 transition-transform duration-300"
          style={{
            zIndex: 0,
            transform: `translateY(-${50 + parallax * 0.3}%)`
          }}
        />
        {/* Phone image centered above */}
        <img
          src="/phone.png"
          alt="Phone screenshot"
          className="relative z-10 w-64 sm:w-80 md:w-[370px] drop-shadow-xl transition-transform duration-300"
          style={{
            zIndex: 10,
            transform: `translateY(-${parallax}px)`
          }}
        />
  </div>

  {/* Feature text section */}
  <FeatureText />
    </main>
  );

}