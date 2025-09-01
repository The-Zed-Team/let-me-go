import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Let Me Goo",
  description: "Let Me Goo – Instantly notify vehicle owners, protect your privacy, and make parking stress-free.",
  keywords: ['parking', 'vehicle notification', 'car blocking', 'privacy', 'mobile app', 'letmegoo', 'parking solution'],
  authors: [{ name: 'Let Me Goo Team' }],
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/android-chrome-512x512.png",
  },
  openGraph: {
    type: 'website',
    url: 'https://www.letmegoo.com/',
    title: 'Let Me Goo',
    description: 'Let Me Goo – Instantly notify vehicle owners, protect your privacy, and make parking stress-free.',
    images: [
      {
        url: '/post.png', // Your image in public folder
        width: 1200,
        height: 630,
        alt: 'Let Me Goo App - Parking Solution',
      }
    ],
    siteName: 'Let Me Goo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Let Me Goo',
    description: 'Let Me Goo – Instantly notify vehicle owners, protect your privacy, and make parking stress-free.',
    images: ['/post.png'], // Your image in public folder
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://www.letmegoo.com'),
};

const General_sans_regular = localFont({
  src: "../public/fonts/GeneralSans-Regular.otf",
  variable: "--font-general-sans",
  display: "swap",
});

const General_sans_medium = localFont({
  src: "../public/fonts/GeneralSans-Medium.otf",
  variable: "--font-general-sans-medium",
  display: "swap",
});

const General_sans_light = localFont({
  src: "../public/fonts/GeneralSans-Light.otf",
  variable: "--font-general-sans-light",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable}
        ${General_sans_regular.variable}
        ${General_sans_medium.variable}
        ${General_sans_light.variable}
        antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col bg-[#F3F3F3]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
