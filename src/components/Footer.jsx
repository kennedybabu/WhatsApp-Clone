import React from 'react'
import { Link } from 'react-router-dom'
import {MdChevronRight} from "react-icons/md"

const Footer = () => {
  return (
    <div className='w-full h-[341px] bg-[#273443]'>
        <div className='w-[1050px] mx-auto flex justify-between text-[#f0f4f9] px-[20px] py-[56px]'>
            <div className='flex flex-col basis-1'>
                <h2 className='pb-[32px] text-[16px] uppercase font-bold'>Whatsapp</h2>
                <Link className='hover:underline'>Features</Link>
                <Link className='hover:underline'>Download</Link>
                <Link className='hover:underline'>Whatsapp Web</Link>
                <Link className='hover:underline'>Business</Link>
                <Link className='hover:underline'>Privacy</Link>
            </div>

            <div className='flex flex-col'>
                <h2 className='pb-[32px] text-[16px] uppercase font-bold'>Company</h2>
                <Link className='hover:underline'>About</Link>
                <Link className='hover:underline'>Careers</Link>
                <Link className='hover:underline'>Brand Center</Link>
                <Link className='hover:underline'>Get in touch</Link>
                <Link className='hover:underline'>Blog</Link>
                <Link className='hover:underline'>WhatsApp Stories</Link>
            </div>

            <div className='flex flex-col basis-1'>
                <h2 className='pb-[32px] text-[16px] uppercase font-bold'>Download</h2>
                <Link className='hover:underline'>Mac/PC</Link>
                <Link className='hover:underline'>Android</Link>
                <Link className='hover:underline'>iPhone</Link>
            </div>

            <div className='flex flex-col basis-1'>
                <h2 className='pb-[32px] text-[16px] uppercase font-bold'>Help</h2>
                <Link className='hover:underline'>Help Center</Link>
                <Link className='hover:underline'>Twitter</Link>
                <Link className='hover:underline'>Facebook</Link>
                <Link className='hover:underline'>Coronavirus</Link>
            </div>           
        </div>
        <div className='w-full h-[66px] text-[#ffffff] bg-[#1c1e21]'>
            <div className='w-[1050px] mx-auto flex items-center justify-between h-full'>
                <p className='text-[18px]'>2022 WhatsApp | clone</p>
                <Link className='flex items-center text-[18px] h-full'>Privacy & Terms <MdChevronRight /> </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer