import React from 'react'
import { SiAppstore } from 'react-icons/si'
import { FaGooglePlay } from 'react-icons/fa6'

export default function DownloadPage() {
  const iosUrl = 'https://apps.apple.com/in/app/letmegoo/id6751348254'
  const androidUrl = 'https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share'

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm text-center">
  <h1 className="text-2xl font-semibold mb-4">Get moving — faster.</h1>
  <p className="text-gray-600 mb-3">Notify vehicle owners instantly and get back on the road without the wait.</p>
  <p className="text-gray-500 mb-8">Choose your platform to download the app.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={androidUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1a73e8] text-white px-6 py-3 rounded-full shadow hover:bg-[#1558b0] transition" style={{ fontFamily: 'General Sans, sans-serif' }}>
            <FaGooglePlay className="w-5 h-5" aria-hidden />
            <span>Get it on Google Play</span>
          </a>
          <a href={iosUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow hover:opacity-95 transition" style={{ fontFamily: 'General Sans, sans-serif' }}>
            <SiAppstore className="w-5 h-5" aria-hidden />
            <span>Download on the App Store</span>
          </a>
        </div>
      </div>
    </main>
  )
}
