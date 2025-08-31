
import React from 'react'
import { DotPattern } from './magicui/dot-pattern';
import { cn } from '@/lib/utils';

const StepPreviewMobile = () => {

        const stepData = [
        {
            title: "Enter vehicle details",
            description: "Open the app, type in or scan the vehicle number, and connect instantly. No searching, no awkward interactions — just a simple lookup.",
            image: '/steps/IMG-20250831-WA0016.jpg'
        },
        {
            title: "Notify instantly",
            description: "Send a quick message or photo alert directly to the car owner. Your privacy is protected, and the owner gets the info in real time.",
            image: "/steps/IMG-20250831-WA0017.jpg"
        },
        {
            title: "Get moving stress-free",
            description: "The owner is notified to clear the way, and you’re back on track. No more honking, waiting, or wasted time in parking chaos.",
            image: "/steps/IMG-20250831-WA0018.jpg"
        }
    ]



    return (
    <div>

        <div className='flex flex-col gap-8 px-4'>
            {
                stepData.map((step, i) => {
                    return (
                        <div className='mb-8 flex flex-col gap-3' key={i}>
                            <div className='text-md text-[#1B2BB8]'>step {i + 1}</div>
                            <div className='font-general-sans-medium text-4xl'>{step.title}</div>
                            <div className='font-general-sans-regular leading-tight'>{step.description}</div>
                            <div className="h-[500px] overflow-clip relative  bg-cover bg-center rounded-3xl p-16 flex justify-end items-end pb-0 bg-[#E6E6E6]">
                                <DotPattern
                                    className={cn(
                                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                                    )}
                                />
                                <div className='absolute right-1/2 translate-x-1/2 -bottom-[30%]'>

                                <img
                                    src={step.image}
                                    width={320}
                                    height={732}
                                    alt=""
                                    className='rounded-4xl'
                                />
                                <img className='absolute top-0 left-1/2 -translate-x-1/2 z-50' src="https://framerusercontent.com/images/H6ikNqzkIq1SwwLemc1wA6DPYQE.png?width=358&height=732" alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default StepPreviewMobile