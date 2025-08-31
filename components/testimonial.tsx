import React, { useState } from "react";

const testimonials = [
  {
    name: "Neha S",
    city: "Mumbai",
    avatar: "/avatars/neha.jpg",
    quote:
      "Privacy was my biggest concern. With Let Me Go, I can alert someone without giving my number. It feels safe and stress-free.",
  },
  {
    name: "Arjun M",
    city: "Bangalore",
    avatar: "/avatars/arjun.avif",
    quote:
      "I was once stuck in my apartment parking for 20 minutes because of a blocked exit. Now I just use Let Me Go and the car owner moves within minutes. Total lifesaver.",
  },
  {
    name: "Kavya R",
    city: "Kochi",
    avatar: "/avatars/kavya.avif",
    quote:
      "This app has changed the way people park in our society. Everyone is more mindful now because they know they’ll get notified.",
  },
  {
    name: "Daniel P",
    city: "Delhi",
    avatar: "/avatars/daniel.avif",
    quote:
      "I travel a lot for work and parking chaos is a daily issue. Let Me Go helps me save time and avoid unnecessary arguments.",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [morph, setMorph] = useState(true);
  const t = testimonials[active];

  // Animate morph (scale+fade) on testimonial change
  const handleSetActive = (idx: number) => {
    if (idx === active) return;
    setMorph(false);
    setTimeout(() => {
      setActive(idx);
      setMorph(true);
    }, 300); // match transition duration
  };

  return (
  <section id="testimonial" className="w-full flex flex-col items-center mt-24 px-4 gap-16">
      <div
        className={`max-w-4xl w-full mb-8 transition-all duration-300 ease-in-out ${morph ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-general-sans-medium`}
      >
        <blockquote>
          “{t.quote}”
        </blockquote>
        <div className="flex items-center gap-4 mt-8">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-200 transition-all duration-300 ease-in-out"
          />
          <div>
            <div
              className="text-black text-base sm:text-lg md:text-xl"
            >
              {t.name}
            </div>
            <div
              className="text-gray-500 text-sm sm:text-base md:text-lg"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: 400,
              }}
            >
              {t.city}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-gray-200 ">
        {testimonials.map((person, idx) => (
          <button
            key={person.name}
            className={`flex flex-col items-center py-8 px-2 sm:px-0 transition border-b sm:border-b-0 sm:border-r border-gray-300 last:border-b-0 sm:last:border-r-0 ${
              active === idx ? "bg-[#E6E6E6]" : "hover:bg-[#E6E6E6]"
            }`}
            style={{ width: "100%" }}
            onClick={() => handleSetActive(idx)}
          >
            <span
              className="text-black mb-1 text-sm sm:text-base md:text-lg"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: active === idx ? 500 : 400,
              }}
            >
              {person.name}
            </span>
            <span
              className="text-gray-500 text-xs sm:text-sm md:text-base"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: 400,
              }}
            >
              {person.city}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
