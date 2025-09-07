import React from "react";
import VideoPlayer from "./video-player";
import FeatureGrid from "./feature-grid";
import Testimonial from "./testimonial";
import CTASection from "./cta-section";
import StepPreview from "./step-preview";
import { TextAnimate } from "@/components/magicui/text-animate";
import StepPreviewMobile from "./step-preview-mobile";

export default function FeatureText() {
  return (
    <div className="w-full flex flex-col items-center md:px-4">
      <div className="max-w-4xl text-black text-left max-sm:px-4">
        
        <TextAnimate
        duration={0.5}
        animation="fadeIn"
        startOnView
          className="mb-10 leading-tight text-4xl lg:text-5xl font-general-sans-medium tracking-tight"
        >
          Let Me Go connects drivers instantly.
          It helps you notify vehicle owners blocking your way — no honking, no waiting, no awkward calls.
        </TextAnimate>
        <TextAnimate
          startOnView
          animation="fadeIn"
          duration={0.5}
          delay={0.3}
          className="leading-tight text-4xl lg:text-5xl font-general-sans-medium tracking-tight"
          
        >
          Fast, simple, and stress-free.
          Send a secure alert in seconds and get moving again, while keeping your privacy protected.
        </TextAnimate>
      </div>
      {/* Video section */}
      <div className="w-full flex justify-center mt-16">
        <VideoPlayer />
      </div>
  <FeatureGrid />
  <div className="hidden md:block">
    <StepPreview />
  </div>
  <div className="md:hidden">
    <StepPreviewMobile />
  </div>
{/*   <Testimonial /> */}
  <CTASection />
    </div>
  );
}
