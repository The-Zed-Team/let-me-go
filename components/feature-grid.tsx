import React from "react";
import { BellRingIcon, LockKeyholeOpenIcon, TimerIcon, CarFrontIcon } from "lucide-react";

const features = [
  {
  icon: (<BellRingIcon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />),
    title: "Notify vehicle owners instantly",
    desc: "Send alerts to car owners blocking your way in just a few taps, without any awkward confrontations.",
  },
  {
  icon: (<LockKeyholeOpenIcon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />),
    title: "Protect your privacy",
    desc: "Your name and number stay hidden while still allowing smooth communication.",
  },
  {
  icon: (<TimerIcon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />),
    title: "Save time and avoid stress",
    desc: "Skip the honking, waiting, or calling security. Get moving faster and hassle-free.",
  },
  {
  icon: (<CarFrontIcon className="w-6 h-6 max-sm:w-5 max-sm:h-5" />),
    title: "Promote better parking habits",
    desc: "Encourage a community of responsible drivers and improve parking culture in your city.",
  },
];


const FeatureGrid = () => {
  return (
    <section className="relative w-full py-16" style={{ fontFamily: 'General Sans, sans-serif' }}>
      {/* Full-width background */}
      <div className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2"></div>

      {/* Content container */}
      <div className="relative z-10">
        <h2
          className="text-center text-black mb-12 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontWeight: 500,
            lineHeight: 1.1,
          }}
        >
          Let Me Go helps you...
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 max-sm:gap-4 gap-6 px-4">
          {features.map((f, i) => (
            <div

              style={{
                boxShadow: '0 0 32px rgba(0,0,0,0.05)',
              }}
            key={i} className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-16 md:aspect-square">
              <div className="flex">
                <div className="bg-[#E2E4F6] p-4 max-sm:p-3.5 rounded-lg text-[#1B2BB8]">
                  {f.icon}
                </div>
              </div>
              <div>
                <div
                  className="text-black mb-2 leading-tight space-y-2 text-left text-2xl "
                  style={{
                    fontFamily: 'General Sans, sans-serif',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    textAlign: 'left',
                  }}
                >
                  {f.title}
                </div>
                <div
                  className="text-gray-500 text-left text-base sm:text-lg md:text-xl"
                  style={{
                    fontFamily: 'General Sans, sans-serif',
                    fontWeight: 500,
                    textAlign: 'left',
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

