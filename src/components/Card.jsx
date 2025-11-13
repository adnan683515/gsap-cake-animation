import React from 'react'

export default function Card({ img }) {
    return (
        <div className='rounded-2xl overflow-hidden '>
            <img className='w-full h-full object-cover' src={img} alt="Card" />
        </div>
    )
}
