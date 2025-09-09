import React from 'react'
import Image from 'next/image'
import CTASection from '@/components/cta-section'

const images = [
  '/whyletmego/IMG-20250909-WA0017.jpg',
  '/whyletmego/IMG-20250909-WA0018.jpg',
  '/whyletmego/IMG-20250909-WA0019.jpg',
  '/whyletmego/IMG-20250909-WA0020.jpg',
  '/whyletmego/IMG-20250909-WA0021.jpg',
  '/whyletmego/IMG-20250909-WA0022.jpg',
  '/whyletmego/IMG-20250909-WA0023.jpg',
  '/whyletmego/IMG-20250909-WA0024.jpg',
  '/whyletmego/IMG-20250909-WA0025.jpg',
  '/whyletmego/IMG-20250909-WA0026.jpg',
]

export default function WhyLetMeGoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold my-16">Why Let Me Go ?</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div key={src} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative w-full h-72">
                <Image src={src} alt="why let me go" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </section>

        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    </main>
  )
}
