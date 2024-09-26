"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FAQ } from '@/constants'

const Faq = () => {
  return (
    <div className='about-us-container container mx-auto my-8 border-b'>
        <h1 className='text-center mb-20 text-3xl md:text-4xl lg:text-5xl tracking-tighter'>FAQ</h1>
      <div className='mx-16'>
      {
        FAQ.map((faq,index)=>(

            <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={faq.value}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        ))
       
}
</div>
    </div>
  )
}

export default Faq
