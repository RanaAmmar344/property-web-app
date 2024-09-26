"use client"
import { SERVICES_TEXT } from '@/constants'
import React from 'react'

const Services = () => {
  return (

    <div className='Services-container mx-auto my-8  '>
      <h1 className='text-center mb-20 text-3xl md:text-4xl lg:text-5xl tracking-tighter' >Services</h1>
<div className='flex flex-wrap mx-8'>
    <div className=' w-full lg:w-1/2  '> 
<div className='p-6'>
<img 
 className='rounded-lg object-cover'
 src='/service.jpeg'
 width={600}
 height={600}
 alt='service'
 
 
 
 />
</div>
    </div>
    <div className='w-full service-text lg:w-1/2 '>
        <h2 className='md:text-5xl mt-10 text-5xl  lg:text-7xl  tracking-tighter'>
             we are
             <br />
              <span>available in </span>
              <br />
              <span className='font-bold'>40+ Countries!</span>
              </h2>
              <p className='mt-6 max-w-xl pr-8'>{SERVICES_TEXT}</p>
    </div>


</div>
    </div>
  )
}

export default Services
