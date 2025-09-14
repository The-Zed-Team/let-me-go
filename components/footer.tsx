import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
  <footer className="w-full border-t border-gray-200 py-8 bg-[#F3F3F3]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div
          className="w-full max-w-2xl px-4 text-gray-600 text-base flex flex-col gap-4 md:flex-row md:gap-0 md:max-w-7xl md:justify-center md:items-center"
          style={{ fontFamily: 'General Sans, sans-serif' }}
        >
          <div className="flex flex-col gap-1 md:flex-row md:gap-10 w-full md:w-auto md:items-center md:justify-center">
            <span className="flex items-center gap-1 whitespace-nowrap md:mr-8">
              <span className="text-lg">©</span> 2025
            </span>
            {/* <Link href="#" className="hover:text-black transition-colors">Company</Link>
            <Link href="#" className="hover:text-black transition-colors">Support</Link> */}
            {/* <Link href="#" className="hover:text-black transition-colors">Resources</Link> */}
            {/* <Link href="#" className="hover:text-black transition-colors">Privacy policy</Link> */}
            {/* <Link href="#" className="hover:text-black transition-colors">Terms of use</Link> */}
            <Link href="https://www.instagram.com/letmegooapp" className="hover:text-black transition-colors">Instagram</Link>
            {/* x.com */}
            <Link href="https://x.com/LetMeGooapp" className="hover:text-black transition-colors">Twitter</Link>
            {/* facebook */}
            <Link href="https://www.facebook.com/letmegooapp" className="hover:text-black transition-colors">Facebook</Link>
            <Link href="/download" className="hover:text-black transition-colors">Download</Link>
            <Link href="/fair-usage" className="hover:text-black transition-colors">Fair Usage Policy</Link>
            <span className="text-gray-500 ml-4">Made with code and 💛 by <a href="https://richinnovationsplc.com/" target="_blank">Richinnovations</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
