import React from 'react'
import Image from 'next/image'

const team = [
  { name: 'Richin R chandran', role: '', img: '/avatars/arjun.avif' },
  { name: 'Muhammed R', role: '', img: '/avatars/daniel.avif' },
  { name: 'DARSHAN KUMAR', role: '', img: '/avatars/kavya.avif' },
  { name: 'Edwin', role: '', img: '/avatars/arjun.avif' },
  { name: 'Aswanth', role: '', img: '/avatars/daniel.avif' },
  { name: 'Yasin', role: '', img: '/avatars/kavya.avif' },
 { name: 'Alan', role: '', img: '/avatars/arjun.avif' },
  { name: 'Jishnu', role: '', img: '/avatars/daniel.avif' },
  { name: 'Nifty', role: '', img: '/avatars/kavya.avif' },
]

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Meet the team</h2>
        <p className="text-gray-600 mb-8">A small crew of designers and builders who love clean interfaces and fast workflows.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <article key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full h-72 bg-gray-100 relative">
                <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} className="rounded-t-2xl" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#b98f5d] tracking-wider">{member.role}</div>
                  <div className="mt-2 text-xl font-bold tracking-tight">{member.name.toUpperCase()}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">x</button>
                  <button className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">in</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
