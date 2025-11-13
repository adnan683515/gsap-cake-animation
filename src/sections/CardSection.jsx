import React from 'react'
import Card from '../components/Card'
import img1 from './../../public/images/card2.png'
import img2 from './../../public/images/card1.png'
import img3 from './../../public/images/card3.png'
import img4 from './../../public/images/card4.png'
import img5 from './../../public/images/card5.png'
import img6 from './../../public/images/card6.png'

const imageArray = [img1, img2, img3, img4, img5, img6]

export default function CardSection() {
    return (
        <div className='w-full flex'>

            <div className='w-1/2 flex justify-center items-center  p-10'>
                <section className=' text-center relative max-w-[80%]'>
                    <h1 className='text-6xl text-black mb-10  font-semibold'>
                        STIR UP YOUR <br /> FEARLESS PAST AND
                    </h1>

                    <div className='w-[200px] box mt-10  absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[80px] flex justify-center items-center bg-[#E3A458]'>
                        <h1 className='font-bold text-3xl'>FUEL UP</h1>
                    </div>

                    <h1 className='text-6xl text-black  mt-16 font-semibold'>
                        YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
                    </h1>
                </section>
            </div>


            <div className='w-1/2 flex overflow-x-hidden gap-5 p-5'>
                {imageArray.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full flex-shrink-0 ${index === 0 ? 'ml-0' : ''}`}
                    >
                        <Card img={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
