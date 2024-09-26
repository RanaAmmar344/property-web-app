import { HERO } from '@/constants'
import React from 'react'
import SearchForm from '../SearchForm'

const Hero = () => {
  return (
    <div className='hero min-h-screen flex item-center justify-center  '>
        <div className=' max-w-3xl flex flex-col items-center justify-center'> 
        <div className='space-y-4 '>
            <h1 className='m-4 text-4xl text-center text-white md:text-5xl lg:text-6xl'>{HERO.title}</h1>
             <p className='p-5 text-center text-slate-300' >{HERO.description}</p>
        </div>
        <SearchForm/>
        </div>
      
    </div>
  )
}

export default Hero
