import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-[341px] bg-[#273443] px-[20px] py-[56px]'>
        <div className='w-[1050px] mx-auto'>
            <div className='w-full flex justify-between'>
                <h2 className='pb-[32px]'>Whatsapp</h2>
                <Link>Features</Link>
                <Link>Download</Link>
                <Link>Whatsapp Web</Link>
                <Link>Business</Link>
                <Link>Privacy</Link>
            </div>

            <div>
                <h2>Company</h2>
                <Link>Features</Link>
                <Link>Download</Link>
                <Link>Whatsapp Web</Link>
                <Link>Business</Link>
                <Link>Privacy</Link>
            </div>

            <div>
                <h2>Whatsapp</h2>
                <Link>Features</Link>
                <Link>Download</Link>
                <Link>Whatsapp Web</Link>
                <Link>Business</Link>
                <Link>Privacy</Link>
            </div>

            <div>
                <h2>Whatsapp</h2>
                <Link>Features</Link>
                <Link>Download</Link>
                <Link>Whatsapp Web</Link>
                <Link>Business</Link>
                <Link>Privacy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer