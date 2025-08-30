import React from "react";

const features = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7B6EF6" strokeWidth="1.5" className="bg-[#edeaff] rounded-xl p-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 9 9" />
      </svg>
    ),
    title: "Notify vehicle owners instantly",
    desc: "Send alerts to car owners blocking your way in just a few taps, without any awkward confrontations.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7B6EF6" strokeWidth="1.5" className="bg-[#edeaff] rounded-xl p-2">
        <rect x="9" y="11" width="6" height="7" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4m0-4a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
    title: "Protect your privacy",
    desc: "Your name and number stay hidden while still allowing smooth communication.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7B6EF6" strokeWidth="1.5" className="bg-[#edeaff] rounded-xl p-2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Save time and avoid stress",
    desc: "Skip the honking, waiting, or calling security. Get moving faster and hassle-free.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7B6EF6" strokeWidth="1.5" className="bg-[#edeaff] rounded-xl p-2">
        <rect x="3" y="11" width="18" height="7" rx="2" />
        <rect x="7" y="7" width="10" height="4" rx="2" />
        <circle cx="7.5" cy="18" r="1.5" />
        <circle cx="16.5" cy="18" r="1.5" />
      </svg>
    ),
    title: "Promote better parking habits",
    desc: "Encourage a community of responsible drivers and improve parking culture in your city.",
  },
];


const FeatureGrid = () => {
  return (
    <section className="relative w-full py-16" style={{ fontFamily: 'General Sans, sans-serif' }}>
      {/* Full-width background */}
      <div className="absolute inset-0 w-screen bg-[#f7f7f8] left-1/2 transform -translate-x-1/2"></div>
      
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
              <div>{f.icon}</div>
              <div>
                <div
                  className="text-black mb-2 leading-tight text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl"
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

