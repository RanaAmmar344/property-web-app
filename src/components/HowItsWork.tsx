import { HOW_IT_WORKS } from '@/constants'
import {  CircleCheckBig } from 'lucide-react'
import React from 'react'

const HowItsWork = () => {
  return (
    <div className='work-container my-10 mx-11 pd-10'>
        <h1 className='text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl ' >{HOW_IT_WORKS.title}</h1>
        <p className='my-10 max-w-4xl mx-auto text-center text-neutral-800'>{HOW_IT_WORKS.content}</p>
      <div className='works relative h-[640px] rounded-lg mx-11' >
        <div className=' p-16 text-neutral-200'>
            {HOW_IT_WORKS.steps.map((step,index)=>(

           <div key={index} >
            <div className='flex items-center mt-5 '> 
            <CircleCheckBig className='mr-4 text-green-400'/>
            <h6>{step.title}</h6>
           </div>
           <p className='max-w-80 mt-5 ' >{step.text}</p>
           </div>

            ))

            }

        </div>
        
         </div>
    </div>
  )
}

export default HowItsWork
