import React from 'react'
import Navber from './components/Navber'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import MessagesSections from './sections/MessagesSections'
import CardSection from './sections/CardSection'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (

    <div>
      <div className=''>

        <Navber></Navber>
      </div>
      <HeroSection></HeroSection>


      <div className='overflow-hidden'>
        <MessagesSections></MessagesSections>
      </div>

      <div className='min-h-screen   '>
        <CardSection></CardSection>
      </div>
    </div>
  )
}
