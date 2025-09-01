"use client"


import React, { useState, } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
// ...existing code...



const StepPreview = () => {

    const [scrollValue, setscrollValue] = useState(0)
    // no crossfade state needed; we'll show three image components and animate opacity
    const [currImage, setcurrImage] = useState('/steps/IMG-20250831-WA0016.jpg')
    gsap.registerPlugin(ScrollTrigger)
    const containerRef = React.useRef(null)

    useGSAP(() => {

        gsap.to('.right-container', {
            scrollTrigger: {
                trigger: '.right-container',
                endTrigger: '.right-wrapper',
                start: 'top 100',
                end: '65% top',
                markers: false,
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    // compute percentage locally to avoid logging stale state
                    const pct = Math.round(self.progress * 100);
                    setscrollValue(pct);
                    // choose image based on thresholds and keep currImage for compatibility
                    const next = pct >= 60
                        ? '/steps/IMG-20250831-WA0018.jpg'
                        : pct >= 10
                            ? '/steps/IMG-20250831-WA0017.jpg'
                            : '/steps/IMG-20250831-WA0016.jpg';
                    if (next !== currImage) setcurrImage(next);
                }
            },
        })

    }, { scope: containerRef })


    const stepData = [
        {
            title: "Enter vehicle details",
            description: "Open the app, type in or scan the vehicle number, and connect instantly. No searching, no awkward interactions — just a simple lookup.",
            image: '/steps/IMG-20250831-WA0016.jpg'
        },
        {
            title: "Notify instantly",
            description: "Send a quick message or photo alert directly to the car owner. Your privacy is protected, and the owner gets the info in real time.",
            image: "/steps/IMG-20250831-WA0018.jpg"
        },
        {
            title: "Get moving stress-free",
            description: "The owner is notified to clear the way, and you’re back on track. No more honking, waiting, or wasted time in parking chaos.",
            image: "/steps/IMG-20250831-WA0017.jpg"
        }
    ]


    return (


        <div ref={containerRef} className='flex w-full max-w-4xl gap-16'>

            {/* left container */}
            <div className=' flex-1'>
                {
                    stepData.map((step, i) => (

                        <div key={i} className='min-h-dvh'>
                            <div className='flex flex-col gap-6'>
                                <div className='capitalize text-lg text-[#1B2BB8]'>step {i + 1}</div>
                                <div className='text-black font-general-sans-medium text-4xl'>{step.title}</div>
                                <div className='font-general-sans-light text-gray-500'>{step.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* right container */}
            <div className='flex-1 h-[300vh] right-wrapper'>
                <div className=" right-container flex-1 max-h-[100vh]  rounded-2xl">
                    <div className="h-[820px] relative w-full bg-cover bg-center rounded-3xl p-16 flex justify-end items-end pb-0 bg-[#E6E6E6]">
                        <DotPattern
                            className={cn(
                                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                            )}
                        />
                        {/* Three stacked motion images. They animate opacity based on scrollValue */}
                        {/** activeIndex: 0 => first, 1 => second, 2 => third */}
                        {(() => {
                            const activeIndex = scrollValue >= 60 ? 2 : scrollValue >= 10 ? 1 : 0;
                            const imgs = [
                                '/steps/IMG-20250831-WA0018.jpg',
                                '/steps/IMG-20250831-WA0019.jpg',
                                '/steps/IMG-20250831-WA0017.jpg',
                            ];
                            return imgs.map((src, i) => (
                                <motion.img
                                    key={src}
                                    src={src}
                                    width={260}
                                    height={732}
                                    alt=""
                                    className={`absolute right-1/2 translate-x-1/2 bottom-3 ${i === activeIndex ? 'z-40' : 'z-30'}`}
                                    initial={{ opacity: 0,  }}
                                    animate={{ opacity: i === activeIndex ? 1 : 0, }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                />
                            ))
                        })()}
                        <img className='relative z-50' src="https://framerusercontent.com/images/H6ikNqzkIq1SwwLemc1wA6DPYQE.png?width=358&height=732" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StepPreview