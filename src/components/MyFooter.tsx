import { FOOTER } from '@/constants'
import { FacebookIcon, GithubIcon, InstagramIcon,  TwitchIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const myFooter = () => {
  return (
    <div className='footer-contaier bg-black text-white p-20' >

      <div className="flex flex-wrap border-b border-neutral-700 pb-10">
        <div className=' w-full md:w-1/2 lg:w-6/12' >
          <h4 className='font-bold' >RealEs</h4>
         <p className='text-sm py-6 max-w-sm'>{FOOTER.description}</p>
         <div className='flex gap-3'>
         <FacebookIcon/>
         <InstagramIcon/>
         <GithubIcon/>
         <TwitchIcon/>
         </div>
        </div>
        <div>
          <div className='flex footer-item'> 
          {
            FOOTER.categories.map((footer,index)=>(
              <div key={index} className=' mx-4  w-full md:w-1/2 lg:w-5/12'>
                <h3 className='font-semibold' >{footer.name}</h3>
                <ul>
                  {footer.links.map((footerlink,index)=>(
                    <li className='my-4 text-sm' key={index}>
                      <Link className='hover:text-neutral-400' href={footerlink.url}>
                      {footerlink.title}
                    </Link>
                    </li>
                  ))}
                </ul>


              </div>

            ))
          }
          </div>
        </div>


      </div>
      <h3 className='flex items-center justify-center pt-2 text-neutral-500 text-center'>{FOOTER.copyright}</h3>
      
    </div>
  )
}

export default myFooter
