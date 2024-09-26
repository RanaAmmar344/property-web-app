import Hero from '@/components/ui/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import HowItsWork from '@/components/HowItsWork'
import FeaturedProperties from '@/components/FeaturedProperties'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import Testimonals from '../components/Testimonals'
import Faq from '@/components/Faq'
import MyFooter from '@/components/MyFooter'

const Home
 = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
      <HowItsWork/>
      <FeaturedProperties/>
      <Services/>
      <AboutUs/>
      <Testimonals/>
      <Faq/>
      <MyFooter/>
    </>
  )
}

export default Home

