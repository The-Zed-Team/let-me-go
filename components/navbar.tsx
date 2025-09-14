"use client";
import React, { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { SiAppstore } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full px-8 lg:px-64 py-2 flex items-center justify-between bg-[#F3F3F3] sticky top-0 z-50" style={{ minHeight: '56px', fontFamily: 'Familjen Grotesk, sans-serif', backdropFilter: 'blur(32px)' }}>
      {/* Logo/Brand */}
      <div className="font-bold text-lg flex-shrink-0 mr-4 familjen-grotesk-logo" style={{ letterSpacing: 0.5 }}>#LetMeGoo</div>
      {/* Centered Navigation */}
      {/* Desktop Nav Links */}
      <div className="flex-1 flex justify-center mx-[-40px] nav-links-desktop">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/team" className="text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }}>Team</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/whyletmego" className="text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }}>Why Let Me Goo?</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/download" className="text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }}>Download</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             {/* <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#testimonial" className="text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('testimonial');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY;
                    const overshoot = 40;
                    window.scrollTo({ top: y - overshoot, behavior: 'smooth' });
                    setTimeout(() => {
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }, 400);
                  }
                }}>Wall Of Love</a>
              </NavigationMenuLink>
            </NavigationMenuItem>*/}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }}>Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Hamburger Icon for Mobile/Tablet */}
      <button
        className="hamburger md:hidden flex flex-col justify-center items-center ml-2 absolute right-4 top-1/2 -translate-y-1/2"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
        style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: 0 }}
      >
        {/* Hamburger icon */}
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
      </button>

      {/* Mobile/Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fafafa] shadow-lg z-50 flex flex-col items-center py-4 nav-links-mobile md:hidden animate-fade-in">
          <Link href="/" className="py-2 px-4 w-full text-center text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/team" className="py-2 px-4 w-full text-center text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={() => setMenuOpen(false)}>Team</Link>
          <Link href="/whyletmego" className="py-2 px-4 w-full text-center text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={() => setMenuOpen(false)}>Why Let Me Goo?</Link>
          <Link href="/download" className="py-2 px-4 w-full text-center text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={() => setMenuOpen(false)}>Download</Link>
          <Link href="/contact" className="py-2 px-4 w-full text-center text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={() => setMenuOpen(false)}>Contact</Link>
           {/*  <a href="#testimonial" className="py-2 px-4 w-full text-center text-gray-600 font-medium hover:text-black transition-colors" style={{ fontFamily: 'Familjen Grotesk, sans-serif' }} onClick={e => {
            e.preventDefault();
            setMenuOpen(false);
            setTimeout(() => {
              const el = document.getElementById('testimonial');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY;
                const overshoot = 40;
                window.scrollTo({ top: y - overshoot, behavior: 'smooth' });
                setTimeout(() => {
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }, 400);
              }
            }, 100);
          }}>Wall Of Love</a> */}
          <a
            onClick={() => {
              const isApple = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || navigator.platform === 'MacIntel');
              const iosUrl = 'https://apps.apple.com/in/app/letmegoo/id6751348254';
              const androidUrl = 'https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share';
              window.open(isApple ? iosUrl : androidUrl, '_blank');
            }}
            className="download-btn font-normal text-white transition-colors text-sm download-rise mt-4 cursor-pointer"
            style={{ fontFamily: 'Familjen Grotesk, sans-serif', width: '90%', justifyContent: 'center' }}
          >
            Download Let Me Goo
            <span className="ml-3 inline-flex items-center">
              {typeof navigator !== 'undefined' && (/iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || navigator.platform === 'MacIntel')
                ? <SiAppstore aria-hidden />
                : <FaGooglePlay aria-hidden />
              }
            </span>
          </a>
        </div>
      )}
      {/* Download Button */}
      <div className="flex-shrink-0 ml-4 download-desktop-btn">
        <a
          onClick={() => {
            const isApple = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || navigator.platform === 'MacIntel');
            const iosUrl = 'https://apps.apple.com/in/app/letmegoo/id6751348254';
            const androidUrl = 'https://play.google.com/store/apps/details?id=com.letmegoo.app&pcampaignid=web_share';
            window.open(isApple ? iosUrl : androidUrl, '_blank');
          }}
          className="download-btn font-normal text-white transition-colors text-sm download-rise cursor-pointer"
          style={{ fontFamily: 'Familjen Grotesk, sans-serif' }}
        >
          Download Let Me Goo
          <span className="ml-3 inline-flex items-center">
            {typeof navigator !== 'undefined' && (/iPad|iPhone|iPod|Mac/.test(navigator.userAgent) || navigator.platform === 'MacIntel')
              ? <SiAppstore aria-hidden />
              : <FaGooglePlay aria-hidden />
            }
          </span>
        </a>
      </div>
      <style jsx>{`
        .familjen-grotesk-logo {
          font-family: 'Familjen Grotesk', sans-serif;
        }
        .download-btn {
          background-color: var(--token-5155c835-a0fe-4656-bc3a-ebdec1c8a6d9, rgb(0, 102, 255));
          opacity: 1;
          border-radius: 100px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px;
          will-change: auto;
          padding: 6px 16px;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
        }
        .download-rise {
          transition: transform 0.2s cubic-bezier(.4,2,.6,1), background 0.2s;
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .nav-links-desktop {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
            position: absolute !important;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
          }
          .download-desktop-btn {
            display: none !important;
          }
        }
        @media (min-width: 1025px) {
          .nav-links-mobile, .hamburger {
            display: none !important;
          }
          .download-desktop-btn {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          nav {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        .animate-fade-in {
          animation: fadeInMenu 0.2s ease;
        }
        @keyframes fadeInMenu {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  )
}

