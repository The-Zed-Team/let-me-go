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
  <section id="testimonial" className="w-full flex flex-col items-center mt-24 px-4">
      <div
        className={`max-w-5xl w-full mb-8 transition-all duration-300 ease-in-out ${morph ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{
          fontFamily: "General Sans, sans-serif",
          fontWeight: 500,
          fontSize: "2.75rem",
          lineHeight: 1.1,
        }}
      >
        <blockquote>
          “{t.quote}”
        </blockquote>
        <div className="flex items-center gap-4 mt-8">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-16 h-16 rounded-full object-cover border border-gray-200 transition-all duration-300 ease-in-out"
            style={{ opacity: morph ? 1 : 0, transform: morph ? 'scale(1)' : 'scale(0.95)' }}
          />
          <div>
            <div
              className="text-black"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: 500,
                fontSize: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              {t.name}
            </div>
            <div
              className="text-gray-500"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: 400,
                fontSize: "1.1rem",
              }}
            >
              {t.city}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-gray-200 bg-white">
        {testimonials.map((person, idx) => (
          <button
            key={person.name}
            className={`flex flex-col items-center py-6 px-2 sm:px-0 transition bg-gray-100 sm:bg-white border-b sm:border-b-0 sm:border-r border-gray-200 last:border-b-0 sm:last:border-r-0 ${
              active === idx ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
            style={{ width: "100%" }}
            onClick={() => handleSetActive(idx)}
          >
            <span
              className="text-black mb-1"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: active === idx ? 500 : 400,
                fontSize: "1.1rem",
              }}
            >
              {person.name}
            </span>
            <span
              className="text-gray-500"
              style={{
                fontFamily: "General Sans, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
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
