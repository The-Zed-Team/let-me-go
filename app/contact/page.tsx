import React from 'react'
import CTASection from '@/components/cta-section'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us</h1>

        <section className="text-gray-700 space-y-4">
          <div>
            <div className="text-sm text-gray-500">Company</div>
            <div className="mt-1 font-medium">Richinnovations Technologies Pvt Ltd</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Address</div>
            <div className="mt-1">KSUM, Ground floor, Tejaswini, Technopark, Trivandrum, Kerala.</div>
            <div className="mt-1">Pin 695581</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Feedback & Suggestions</div>
            <div className="mt-1">
              Write your suggestions and feedback: <a href="mailto:sales@richinnovationsplc.com" className="text-blue-600 underline">sales@richinnovationsplc.com</a>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500">WhatsApp</div>
            <div className="mt-1"><a href="https://wa.me/918281035452" className="text-blue-600 underline">+91 82810 35452</a></div>
          </div>
        </section>

      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <CTASection />
      </div>
    </main>
  )
}
