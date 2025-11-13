import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import React from "react";




export default function HeroSection() {




    useGSAP(() => {
        const splitText = SplitText.create('.splitText', {
            type: 'chars'
        })

        const tl = gsap.timeline({ delay: 1 });

        tl.to('.hero-content', {
            opacity: 1,
            y: -15,
            ease: 'power1.inOut'
        })
            .to('.sub-title', {
                duration: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            }, "-=0.5").from(splitText.chars, {
                yPercent: 200,
                stagger: 0.06,
                ease: 'power1.inOut',
                opacity: 0
            })

        let scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-container',
                start: '4% top',
                end: 'bottom top',
                scrub: 1
            }
        });

        scrollTl.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            borderRadius: "50%",
            ease: "power2.inOut"
        });

    });

    return (
        <div className="relative bg-milk w-screen h-dvh overflow-hidden">
            <div className="hero-container  h-dvh">

                <video
                    src="videos/hero-bg.mp4"
                    autoPlay

                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                ></video>


                <div className="absolute inset-0 hero-content opacity-0 flex flex-col justify-center items-center text-center z-10">

                    <h1
                        className="text-dark-brown 
          2xl:text-[5.5rem] md:text-[3.5rem] text-[2.3rem] 
          font-bold splitText uppercase tracking-[-.35vw] "
                    >
                        Freaking Delicious
                    </h1>

                    <div className="rotate-[-7deg]  sub-title  mb-8 border-[0.5vw] border-milk inline-block">
                        <h1
                            className="bg-[#A26833]  uppercase text-[#FAEADE] 
            font-bold text-center px-8 py-8  text-4xl md:text-6xl"

                        >
                            Protein + Caffeine
                        </h1>
                    </div>

                    <h1 className=" w-[600px] text-center my-4">
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </h1>

                    <div>
                        <button className="bg-[#E3A458] px-6  py-4 font-semibold rounded-l-full rounded-r-full">Chug the SPYLT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
