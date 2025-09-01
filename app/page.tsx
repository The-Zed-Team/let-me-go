
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
    <>
      {/* Hero section - positioned lower on screen */}
      <main className="flex flex-col items-center justify-end min-h-screen px-4 relative gap-16 overflow-hidden" style={{ fontFamily: 'General Sans, sans-serif' }}>
        {/* Text content positioned in lower portion */}
        <div className="flex flex-col items-center justify-center z-20 max-w-4xl mx-auto mb-12 mt-52">
          <h1
            className="text-center text-black mb-6  text-4xl mdtext-5xl lg:text-6xl font-general-sans-medium"
          >
            Stuck Behind a Badly Parked<br />
            Car? Just Tap, Notify & Go.
          </h1>
          <p
            className="text-center text-gray-500 max-w-xl mb-8 text-sm sm:text-base md:text-lg lg:text-2xl leading-tight"
          >
            Let Me Go is a free app that instantly connects you to the owner of the vehicle blocking your way. No honking, no waiting, no stress.
          </p>
          <button
            type="button"
            className="inline-flex capitalize items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#1a23c3] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#111a9c] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a23c3]"
            onClick={() => {
              const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
              const iosUrl = 'https://apps.apple.com/in/app/letmegoo/id6751348254';
              const androidUrl = 'https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share';
              window.location.href = isIOS ? iosUrl : androidUrl;
            }}
          >
            Let's get started <span className="ml-2">→</span>
          </button>
        </div>

        {/* Images arrangement - positioned below the text in lower portion */}
        <div className="relative flex items-center justify-center w-full max-w-[720px] mx-auto z-10 -mb-24 ">
          {/* Left background shape */}
          <img
            src="/1.png"
            alt="Background shape left"
            className="absolute left-0 top-36 w-48 sm:w-64 md:w-80 lg:w-96 transition-transform duration-300"
            style={{
              transform: `translateY(-${50 + parallax * 0.3}%) translateX(-20%)`
            }}
          />
          {/* Right background shape */}
          <img
            src="/2.png"
            alt="Background shape right"
            className="absolute right-0 top-1/2 w-48 sm:w-64 md:w-80 lg:w-96 transition-transform duration-300"
            style={{
              transform: `translateY(-${30 + parallax * 0.2}%) translateX(20%)`
            }}
          />
          {/* Phone image centered */}
          <img
            src="/phone.png"
            alt="Phone screenshot"
            className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[420px] drop-shadow-2xl transition-transform duration-300"
            style={{
              transform: `translateY(-${parallax * 0.1}px)`
            }}
          />
        </div>
      </main>

      {/* Smooth transition section */}
      <section 
        className="w-full bg-gradient-to-b py-20"
      >
        <FeatureText />
      </section>
    </>
  );

}