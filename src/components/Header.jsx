import React from 'react'
import {Link} from "react-router-dom"
import Png from "../images/favicon.png"
import {BsGlobe} from "react-icons/bs"
import {AiOutlineCaretDown} from "react-icons/ai"

const Header = () => {
  return (
    <div className='w-full h-[91px] bg-[#128c7e]'>
        <div className='max-w-[1050px] h-full mx-auto flex items-center justify-between'>
            <div className='h-full flex items-center'>
                <img className='w-[35px] mr-2' src={Png} alt="logo" />
                <p className='font-bold text-white text-[22px]'>WhatsApp</p>
            </div>
            <div className='text-white font-[16px] flex justify-between uppercase w-[783px]'>
                <Link className='mx-2 cursor-pointer'>Whatsapp Web</Link>
                <Link className='mx-2 cursor-pointer'>Features</Link>
                <Link className='mx-2 cursor-pointer'>Download</Link>
                <Link className='mx-2 cursor-pointer'>Privacy</Link>
                <Link className='mx-2 cursor-pointer'>Help Center</Link>
                <Link className='mx-2 cursor-pointer items-center flex '><BsGlobe className='mr-1'/> En <AiOutlineCaretDown className='ml-1 text-[9px]'/></Link>
            </div>           
        </div>
    </div>
  )
}

export default Header