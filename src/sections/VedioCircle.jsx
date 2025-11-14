import React, { useEffect, useRef } from 'react'
import vedio from '/videos/pin-video.mp4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { js } from '@eslint/js';

gsap.registerPlugin(ScrollTrigger)

export default function VedioCircle() {
    const overlayRef = useRef(null)
    const containerRef = useRef(null)
    const shelfRef = useRef(null)
    const textDivRef = useRef(null)
    const protinRef = useRef(null)
    const Lactose = useRef(null)
    const InfinityRef = useRef(null)
    const whatRef = useRef(null)
    const lastDivRef = useRef(null)
    const everyOneref = useRef(null)
    const taklingREf = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                overlayRef.current,
                {
                    clipPath: "circle(150% at 50% 50%)",
                },
                {
                    clipPath: "circle(80px at 50% 50%)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom+=600 top",
                        scrub: true,
                        pin: true,
                    }
                }
            )

            const textTl = gsap.timeline({
                scrollTrigger: {
                    trigger: textDivRef.current,
                    start: 'top 60%',
                    end: 'bottom 60%',
                    scrub: true,

                }
            })

            textTl.fromTo(
                shelfRef.current,
                {
                    clipPath: 'polygon(54% 29%, 54% 29%, 56% 64%, 56% 64%)'
                },
                {
                    clipPath: 'polygon(0% 20%, 100% 20%, 100% 80%, 0% 80%)',
                    ease: 'power2.out',
                    duration: 1.5
                }
            )

            textTl.fromTo(protinRef.current, {
                clipPath: 'polygon(54% 29%, 54% 29%, 56% 64%, 56% 64%)'
            }, {
                clipPath: 'polygon(0% 20%, 100% 20%, 100% 80%, 0% 80%)',
                ease: 'power2.out',
                duration: 1.5
            })

            textTl.fromTo(InfinityRef.current, {
                clipPath: 'polygon(54% 29%, 54% 29%, 56% 64%, 56% 64%)'
            }, {
                clipPath: 'polygon(0% 20%, 100% 20%, 100% 80%, 0% 80%)',
                ease: 'power2.out',
                duration: 1.5
            })

            textTl.fromTo(Lactose.current, {
                clipPath: 'polygon(54% 29%, 54% 29%, 56% 64%, 56% 64%)'
            }, {
                clipPath: 'polygon(0% 20%, 100% 20%, 100% 80%, 0% 80%)',
                ease: 'power2.out',
                duration: 1.5
            })



            gsap.to(whatRef.current, {
                x: 200,
                y: -3,
                duration: 1.2,

                scrollTrigger: {
                    trigger: lastDivRef.current,
                    start: '14% top',
                    end: '60% top',
                    scrub: true,
                }
            })
            gsap.to(everyOneref.current, {
                x: -100,
                y: 3,
                duration: 1.2,

                scrollTrigger: {
                    trigger: lastDivRef.current,
                    start: '14% top',
                    end: '60% top',
                    markers: true,
                    scrub: true,
                }
            })
            gsap.to(taklingREf.current, {
                x: -200,
                y: 3,
                duration: 1.2,

                scrollTrigger: {
                    trigger: lastDivRef.current,
                    start: '14% top',
                    end: '60% top',
                    markers: true,
                    scrub: true,
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className=''>


            <div ref={textDivRef} className='bg-black flex justify-center items-center'>

                <div className='w-[60%] my-52'>

                    <div className='flex justify-center py-6 rotate-3 items-center '>
                        <div
                            ref={shelfRef}
                            style={{
                                clipPath: 'polygon(54% 29%, 54% 30%, 56% 63%, 56% 64%)'
                            }}
                            className='uppercase py-6 bg-[#C88E64] border-4 border-black h-[140px] flex justify-center items-center max-w-[700px] min-w-[500px]'
                        >
                            <span className='w-full text-center text-5xl font-extrabold text-[#FAEADE]'>
                                Shelf stable
                            </span>
                        </div>
                    </div>

                    <div ref={protinRef} className='flex py-6 justify-center overflow-hidden -rotate-8 items-center '>
                        <div className='uppercase py-6 bg-[#FAEADE] border-4 border-black h-[140px] flex justify-center items-center w-[780px] min-w-[500px]'>
                            <span className='w-full text-center text-5xl font-extrabold text-black'>
                                Protein + Caffeine
                            </span>
                        </div>
                    </div>

                    <div ref={InfinityRef} className='flex py-6 justify-center rotate-1 items-center '>
                        <div className='uppercase py-6 bg-[#7F3B2D] border-4 border-black h-[140px] flex justify-center items-center w-[900px] min-w-[500px]'>
                            <span className='w-full text-center text-5xl font-extrabold text-[#FAEADE]'>
                                Infinitely recyclable
                            </span>
                        </div>
                    </div>

                    <div ref={Lactose} className='flex py-6 justify-center -rotate-10 items-center'>
                        <div className='uppercase  bg-[#FED775] border-4 border-black h-[140px] flex justify-center items-center max-w-[700px] min-w-[500px]'>
                            <span className='w-full text-center text-5xl font-extrabold text-[#222123]'>
                                Lactose free
                            </span>
                        </div>
                    </div>

                </div>

            </div>


            <div
                ref={containerRef}
                className="relative  w-full h-screen overflow-hidden"
            >
                <video
                    src={vedio}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                ></video>

                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-black"
                    style={{
                        clipPath: "circle(150% at 50% 50%)",
                    }}
                ></div>

                <div
                    className="absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
                >
                    <div
                        className="w-40 h-40 
                        rounded-full 
                        backdrop-blur-xl bg-white/10 
                        border border-white/40 
                        shadow-2xl flex items-center justify-center"
                    >
                        <button className="px-6 py-3 rounded-full bg-[#FAEADE] backdrop-blur-lg border border-white/40 text-black font-semibold">
                            Explore
                        </button>
                    </div>
                </div>

            </div>


            <div ref={lastDivRef} className=' bg-[#FAEADE] '>

                <div className='w-[90%] mx-auto py-30'>
                    <h1 ref={whatRef} className=' uppercase lg:text-[200px] font-semibold text-end'>What’s</h1>


                    <h1 ref={everyOneref} className=' uppercase text-center lg:text-[200px]  font-semibold text-[#E3A458]'>everyone</h1>


                    <h1 ref={taklingREf} className=' uppercase text-start lg:text-[200px]  font-semibold text-[#222123]'>talking</h1>
                </div>
            </div>


        </div>
    )
}
