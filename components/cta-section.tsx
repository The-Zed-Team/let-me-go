"use client"

import React from "react";
import { SiAppstore } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa6";

const CTASection = () => (
  <section className="w-full flex flex-col items-center my-32 mb-24 px-4 ">
    <div className="flex flex-col gap-5 items-start w-full max-w-4xl">
      <h2
        className="text-black mb-8 font-general-sans-medium text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Use Let Me Goo to notify faster,<br />
        park smarter, and make every<br />
        ride stress-free.
      </h2>
  <button
        type="button"
        className="flex justify-center items-center rounded-full bg-[#3B36F4] px-6 py-2 sm:px-8 sm:py-3 text-white text-base sm:text-lg font-medium shadow transition hover:bg-[#2823c7] focus:outline-none focus:ring-2 focus:ring-[#3B36F4] focus:ring-offset-2 text-left"
        style={{ fontFamily: 'General Sans, sans-serif' }}
        onClick={() => {
          const isApple = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || navigator.platform === 'MacIntel');
          const iosUrl = 'https://apps.apple.com/in/app/letmegoo/id6751348254';
          const androidUrl = 'https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share';
          window.location.href = isApple ? iosUrl : androidUrl;
        }}
        >
        <span className="mr-3">Download Free App</span>
        <span className="inline-flex items-center">
          {typeof navigator !== 'undefined' && (/iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || navigator.platform === 'MacIntel')
            ? <SiAppstore className="w-5 h-5" aria-hidden />
            : <FaGooglePlay className="w-5 h-5" aria-hidden />
          }
        </span>
      </button>
    </div>
  </section>
);

export default CTASection;
