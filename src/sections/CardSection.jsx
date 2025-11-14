import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const imageArray = [
    '/images/card2.png',
    '/images/card1.png',
    '/images/card3.png',
    '/images/card4.png',
    '/images/card5.png',
    '/images/card6.png'
]

export default function CardSection() {
    const imageContainer = useRef(null)
    const textDiv = useRef(null)
    const slideDiv = useRef(null)

    const FuelDiv = useRef(null)

    useEffect(() => {
        if (imageContainer.current && textDiv.current) {
            const width = imageContainer.current.getBoundingClientRect().width
            const textDivWidth = textDiv.current.getBoundingClientRect().width

            gsap.to(slideDiv.current, {
                x: -width * imageArray.length - 1 + textDivWidth,
                duration: 9,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: slideDiv.current,
                    start: 'top top',
                    end: `+=${width * imageArray.length + textDivWidth}`,
                    scrub: 1.2,
                    pin: true,

                }
            })
        }

        return () => ScrollTrigger.killAll()
    }, [])



    useEffect(() => {
        gsap.fromTo(
            FuelDiv.current,
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.2,
                ease: 'power2.out',
                scrub: 1,
                scrollTrigger: {
                    trigger: FuelDiv.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        )
    }, [])



    return (
        <div ref={slideDiv} className='w-full cardContainer flex'>
            <div ref={textDiv} className='w-1/2 flex justify-center items-center p-10'>
                <section className='text-center relative max-w-[80%]'>
                    <h1 className='text-6xl text-[#523] mb-10 font-semibold'>
                        STIR UP YOUR <br /> FEARLESS PAST AND
                    </h1>

                    <div ref={FuelDiv} className='max-w-[300px] min-w-[200px] border-4 border-white box mt-10 absolute left-1/2 top-1/3 -translate-x-1/2 -rotate-7 -translate-y-1/2 h-[80px] flex justify-center items-center bg-[#A26833]'>
                        <h1 className='font-bold text-3xl text-[#FAEADE]'>FUEL UP</h1>
                    </div>

                    <h1 className='text-6xl text-[#523] mt-16 font-semibold'>
                        YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
                    </h1>
                </section>
            </div>

            <div ref={imageContainer} className='w-1/2 flex gap-10 p-5'>
                {imageArray.map((item, index) => {
                    const rotateIndex = index % 2 === 0 ? 'rotate-3' : '-rotate-3'
                    return (
                        <div
                            key={index}
                            className={`w-full ${rotateIndex} flex-shrink-0 ${index === 0 ? 'ml-0' : ''
                                }`}
                        >
                            <Card img={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
