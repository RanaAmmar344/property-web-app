"use client"
import { TESTIMONIALS } from '@/constants'
import React from 'react'

const Testimonals = () => {
  return (
    <div className='testimonal-container mx-auto my-8 border-b'>
         <h1 className='text-center mb-20 text-3xl  md:text-4xl lg:text-5xl tracking-tighter'>What Our Client Said</h1>
      <div className='flex flex-wrap mx-16 '>
        {
            TESTIMONIALS.map((client ,index) =>(
              
                <div key={index} className=' w-full p-2 md:w-1/2 lg:w-1/4   '>
                   <div className='rounded-xl border p-4'>
                   <div className=' flex items-center   '>
                   <img
                  className=' rounded-full rounded-4 '
                  src={client.image}
                  width={80}
                  height={80}
                  alt='client.name'
                    
                    />
                    <div className='ml-2'>
                    <h4>{client.name}</h4>
                    <span className='text-sm text-neutral-600'>{client.instagram}</span>
                    </div>
                   </div>
                    <p className='mt-4 p-4'>{client.feedback}</p>
                    <p className='text-sm text-neutral-600'>{client.city_country}</p>
                </div>
                </div>
            ))

        }

      </div>
    </div>
  )
}

export default Testimonals
