import React, { useEffect, useRef } from 'react'
import spyltImage from '/images/spylybg.png'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function BodySection() {
    const stillRef = useRef(null)
    const bodyRef = useRef(null)
    const containerRef = useRef(null)
    const paragrapRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            const split = new SplitText(stillRef.current, { type: 'chars' })

            const lineSplit = new SplitText(paragrapRef.current, { type: 'words' })
            gsap.from(split.chars, {
                y: 100,
                opacity: 0,
                stagger: .1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '30% 80%',
                    end: 'bottom 50%',


                },
            })

            gsap.fromTo(
                bodyRef.current,
                {
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                },
                {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        end: 'bottom 40%',

                    },
                }
            )
            gsap.from(lineSplit.words, {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 40%',
                }
            })


        })

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="bg-[url('/images/Background.png')] bg-cover relative min-h-screen flex"
        >
            <img
                className="absolute bottom-0 h-[100vh] w-full"
                src={spyltImage}
                alt=""
            />

            <div className="absolute top-1/2 left-8 w-full flex justify-between items-center">
                <div className='relative'>
                    <h1
                        ref={stillRef}
                        className="text-[#523122] font-semibold text-8xl uppercase overflow-hidden"
                    >
                        It still does
                    </h1>

                    <h1
                        ref={bodyRef}
                        className="text-[#FAEADE] absolute top-20 uppercase bg-[#A26833] text-8xl px-2 py-4 -rotate-3 border-8 border-[#FAEADE] inline-block"
                        style={{
                            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                        }}
                    >
                        BODY GOOD
                    </h1>
                </div>

                <div className="w-[20%] text-center mr-6 text-[#523122] font-medium leading-relaxed">
                    <h1 ref={paragrapRef}>
                        Milk contains a wide array of nutrients, including vitamins, minerals, and protein — and this is lactose free.
                    </h1>
                </div>
            </div>
        </div>
    )
}
