import { FEATURED_PROPERTIES } from '@/constants'
import React from 'react'
import Link from 'next/link'
import {  Star } from 'lucide-react'

const FeaturedProperties = () => {
  return (
    <>
    <div className="featured-container   py-8">
        <h1 className='lg:text-5xl pb-10 tracking-tighter text-center sm:text-3xl' >Featured Properties</h1>
      <div className='flex flex-wrap  property-cards items-center justify-center   '>
        {FEATURED_PROPERTIES.map((property,index)=>(
        <div key={index} className='  flex items-center justify-center mt-8 sm:w-1/2 md:w-1/3 lg:w-1/4  ' >
           <Link href='#' className=' m-2  inline-block'>
           <div>
            <img
            className='rounded-md object-cover mb-8'
            src={property.image}
            height={250}
            width={250}
            alt={property.name}
            />
            <div className='text-center mb-5'>
                <h6 className='mb-5 font-medium'>{property.name}</h6>
                <span className='mb-5 font-medium'>{property.price}</span>
                <div className='  flex items-center justify-center'>
                    <Star fill='gold'  className='mr-2 mt-4 mb-5' />
                    <span className='text-sm font-medium'>
                     {property.rating} ({property.reviews} reviews )
                    </span>
                </div>
            </div>

          

           </div>
           



            </Link>
            

        </div>

        ))  }

      </div>
    </div>
      
    </>
  )
}

export default FeaturedProperties
