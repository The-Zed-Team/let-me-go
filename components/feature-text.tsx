import React from "react";
import VideoPlayer from "./video-player";
import FeatureGrid from "./feature-grid";
import Testimonial from "./testimonial";
import CTASection from "./cta-section";

export default function FeatureText() {
  return (
    <div className="w-full flex flex-col items-center mt-20 px-4">
      <div className="max-w-3xl text-black text-left">
        <p
          className="mb-10 leading-tight"
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: 1.1,
          }}
        >
          Let Me Go connects drivers instantly.<br />
          It helps you notify vehicle owners blocking your way — no honking, no waiting, no awkward calls.
        </p>
        <p
          className="leading-tight"
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: 1.1,
          }}
        >
          Fast, simple, and stress-free.<br />
          Send a secure alert in seconds and get moving again, while keeping your privacy protected.
        </p>
      </div>
      {/* Video section */}
      <div className="w-full flex justify-center mt-16">
        <VideoPlayer />
      </div>
  <FeatureGrid />
  <Testimonial />
  <CTASection />
    </div>
  );
}
