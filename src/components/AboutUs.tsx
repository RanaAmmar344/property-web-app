"use client"
import { ABOUT_US_TEXT } from '@/constants'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='about-us-container mx-auto my-8 border-b '>
        <h1 className='text-center mb-20 text-3xl md:text-4xl lg:text-5xl tracking-tighter'>About Us</h1>
         <p className='text-center text-lg tracking-tighter mx-10 px-5' >{ABOUT_US_TEXT}</p>
    <div className='flex flex-wrap  my-9' >
        <div className='w-full text-center border-neutral-600 lg:w-1/2 lg:border-r p-6'>
            <h1 className='lg:text-7xl md:text-5xl text-5xl mb-5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent'>10000+</h1>
            <p className='font-medium'>Client from 2020</p>
        </div>
        <div className='w-full text-center border-neutral-600 lg:w-1/2  p-6'>
            <h1 className='lg:text-7xl text-5xl md:text-5xl mb-5 bg-gradient-to-r from-purple-400 via-green-500 to-purple-500 bg-clip-text text-transparent'>3000+</h1>
            <p className='font-medium'>properties Sold!</p>
        </div>
    </div>
    
    </div>
  )
}

export default AboutUs
