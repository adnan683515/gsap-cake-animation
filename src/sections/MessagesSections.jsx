import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function MessagesSections() {
    useGSAP(() => {

        const headTitle = new SplitText('.headTitle', { type: 'words' })
        const subtitle = new SplitText('.subtitle', { type: 'words' })

        gsap.to(headTitle.words, {
            scrollTrigger: {
                trigger: '.messageContent',
                start: '30% bottom',
                end: 'center center',
                scrub: true,

            },

            color: 'white',
            stagger: .2,
            ease: 'power3.out',
            duration: 1,
        })


        gsap.to(subtitle.words, {
            scrollTrigger: {
                trigger: '.messageContent',
                start: '40% 60%',
                end: 'bottom center',
                scrub: true,

            },

            color: 'white',
            stagger: 0.08,
            ease: 'power3.out',
            duration: 1.2,
        })


        gsap.from('.box', {
            scrollTrigger: {
                trigger: '.messageContent',
                start: '50% 75%',
                end: 'bottom top',
                scrub: true,
            },
            x: 150,
            opacity: 0,
            ease: 'back.out(1.7)',
            duration: 1,
        })

        gsap.to('.messageContent', {
            rotate: 7,
            scrollTrigger: {
                trigger: '.messageContent',

                scrub: true,
                start: '50% 20%',
                end: 'bottom top',

            }
        })
    })

    return (
        <section className='min-h-screen messageContent  flex justify-center items-center overflow-hidden relative z-20 bg-amber-950'>
            <div className='w-[50%] text-center relative'>
                <h1 className='text-8xl mb-10 headTitle font-semibold'>
                    STIR UP YOUR <br /> FEARLESS PAST AND
                </h1>

                <div className='w-[300px] box mt-10 -rotate-3 absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[80px] flex justify-center items-center bg-[#E3A458]'>
                    <h1 className='font-bold text-5xl'>FUEL UP</h1>
                </div>

                <h1 className='text-8xl subtitle mt-16 font-semibold'>
                    YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
                </h1>
            </div>
        </section>
    )
}
