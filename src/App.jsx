import React, { useEffect, useRef } from "react"
import Navber from "./components/Navber"
import HeroSection from "./sections/HeroSection"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import MessagesSections from "./sections/MessagesSections"
import CardSection from "./sections/CardSection"
import BodySection from "./sections/BodySection"
import VedioCircle from "./sections/VedioCircle"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function App() {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      effects: true,
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>

        <Navber />
        <HeroSection />

        <div className="overflow-hidden">
          <MessagesSections />
        </div>

        <CardSection />
        <BodySection />
        <VedioCircle />

        <div className=""></div>

      </div>
    </div>
  )
}
