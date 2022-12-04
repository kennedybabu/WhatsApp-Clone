import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {AiFillAndroid, AiFillApple} from "react-icons/ai"
import {MdDesktopMac, MdChevronRight} from "react-icons/md"

const Landingpage = () => {
  return (
    <div className='w-full'>
        <Header />
        <div className='pt-[56px] w-full bg-[#fff]'>
                <div className='w-[788px] h-[573px] mx-auto flex justify-between'>
                    <div className='w-[394px] h-full'>
                        <h3 className='text-[33px] font-bold pb-4 text-[#1c1e21]'>Simple.Secure.<br></br>Reliable messaging.</h3>
                        <p className='my-[18px] text-[18px] text-[#1c1e21]'>With WhatsApp, you'll get fast, simple, secure messaging and calling
                            for free*, available on phones all over the world.
                        </p>
                        <small className='text-[16px] text-[#5e5e5e]'>*Data charges may apply. Contact your provider details.</small>
                        <div className='mt-[32px]'>
                            <Link className='flex items-center text-[#1cb39b] text-[18px]'><AiFillAndroid className='mr-4'/> Android <MdChevronRight className='ml-2'/></Link>
                            <Link className='flex items-center text-[#1cb39b] text-[18px]'><AiFillApple className='mr-4'/>iPhone <MdChevronRight className='ml-2'/></Link>
                            <Link className='flex items-center text-[#1cb39b] text-[18px]'><MdDesktopMac className='mr-4'/>Mac or Windows PC <MdChevronRight className='ml-2'/></Link>
                        </div>
                    </div>
                    <div className='h-full w-[328px]'>
                        <img className="h-full" src="https://scontent.whatsapp.net/v/t39.8562-34/178505650_460141378430025_2455877548463147186_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=WXfqn59KRBIAX_kZWpf&_nc_ht=scontent.whatsapp.net&oh=01_AdRRMt_gOy4pUu8x0T5DP1oRU83cii0rUn2kJnkkJ_2jvg&oe=63917E4C" alt="/" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Landingpage