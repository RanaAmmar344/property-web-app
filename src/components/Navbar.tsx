"use client"

import React, { useState } from 'react'

import {  Menu, X } from "lucide-react"
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button } from './ui/button'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {

        setMobileDrawerOpen(!mobileDrawerOpen)
    };


    return (
        <>
            <nav className='fixed top-2 z-50 w-screen mx-10 nav-mb' >
                <div className='container flex items-center justify-between rounded-lg bg-black py-3 px-5' >
                   <Link href='/'> <div className='flex shrink-0 items-center justify-between' >
                        <Image className='m-2'
                            src='/logo.png'
                            width={60}
                            height={30}
                            alt='Logo'
                        />
                        <span className='text-sm text-white tracking-tight mx-2 font-bold' > RealES</span>

                    </div>
                    </Link> 
                    <div className='hidden lg:flex '>
                        <ul className='flex items-center gap-4'>
                            {NAV_LINKS.map((item, index) => (
                                <li key={index}>
                                    <Link className='text-sm text-white hover:text-neutral-500'
                                        href={item.url}
                                    >
                                        {item.title}

                                    </Link>

                                </li>
                            ))

                            }

                        </ul>
                    </div>
                    <div className=' hidden lg:flex text-sm text-white' >

                    <Link href="/login"> <Button variant='outline' className='mr-2 bg-black' > Sign in </Button> </Link> 
                        <Button className='bg-slate-800'>Sign UP</Button>
                    </div>
                    <div className='flex-col justify-end text-white md:flex lg:hidden' >

                        <Button onClick={toggleNavbar} > {mobileDrawerOpen ? <X /> : <Menu />}</Button>

                    </div>
                </div>

                {
                    mobileDrawerOpen && (

                        <div className='lg:hidden bg-black rounded-md '>
                        <ul className='flex flex-col items-center gap-4'>
                            {NAV_LINKS.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <Link className='text-sm text-white hover:text-neutral-500'
                                        href={item.url}
                                    >
                                        {item.title}

                                    </Link>

                                </li>
                            ))

                            }

                        </ul>
                        <div className=' flex justify-center pb-5 text-sm text-white' >

 <Link href="/login"> <Button variant='outline' className='mr-2 bg-black' > Sign in </Button> </Link> 

<Button className='bg-slate-800'>Sign UP</Button>
</div>
                    </div>
                    )
                }
    


            </nav>

        </>
    )
}

export default Navbar
