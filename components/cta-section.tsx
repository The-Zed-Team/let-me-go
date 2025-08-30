import React from "react";

const CTASection = () => (
  <section className="w-full flex flex-col items-center mt-40 px-4">
    <div className="flex flex-col items-start w-full max-w-3xl">
      <h2
        className="text-black mb-8 leading-tight text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        style={{
          fontFamily: 'General Sans, sans-serif',
          fontWeight: 500,
          lineHeight: 1.1,
        }}
      >
        Use Let Me Go to notify faster,<br />
        park smarter, and make every<br />
        ride stress-free.
      </h2>
      <a
        href="https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-[#3B36F4] px-6 py-2 sm:px-8 sm:py-3 text-white text-base sm:text-lg font-medium shadow transition hover:bg-[#2823c7] focus:outline-none focus:ring-2 focus:ring-[#3B36F4] focus:ring-offset-2 text-left"
        style={{ fontFamily: 'General Sans, sans-serif' }}
      >
        Download Free App &rarr;
      </a>
    </div>
  </section>
);

export default CTASection;
