import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {AiFillAndroid, AiFillApple} from "react-icons/ai"
import {MdDesktopMac, MdChevronRight} from "react-icons/md"
import {HiLockClosed} from "react-icons/hi"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('clicked')
        navigate('/features')
    }

  return (
    <div className='w-full relative'>
        <Header />
        <div className='pt-[156px] w-full bg-[#fff] items-center flex flex-col pb-[350px]'>
                <div className='w-[788px] h-[573px] mx-auto flex justify-between roboto'>
                    <div className='w-[394px] h-full'>
                        <h3 className='text-[33px] font-bold pb-4 text-[#1c1e21]'>Simple.Secure.<br></br>Reliable messaging.</h3>
                        <p className='my-[18px] text-[18px] text-[#1c1e21]'>With WhatsApp, you'll get fast, simple, secure messaging and calling
                            for free*, available on phones all over the world.
                        </p>
                        <small className='text-[16px] text-[#5e5e5e]'>*Data charges may apply. Contact your provider details.</small>
                        <div className='mt-[32px]'>
                            <Link className='flex items-center text-[#1cb39b] text-[18px] group pb-[16px]'><AiFillAndroid className='mr-4'/><span className='group-hover:underline'>Android</span><MdChevronRight className='ml-2'/></Link>
                            <Link className='flex items-center text-[#1cb39b] text-[18px] group pb-[16px]'><AiFillApple className='mr-4'/><span className='group-hover:underline'>iPhone</span><MdChevronRight className='ml-2'/></Link>
                            <Link className='flex items-center text-[#1cb39b] text-[18px] group pb-[16px]'><MdDesktopMac className='mr-4'/><span className='group-hover:underline'>Mac or Windows PC </span><MdChevronRight className='ml-2'/></Link>
                        </div>
                    </div>
                    {/* <div className='h-full w-[328px]'>
                        <img className="h-full" src="https://scontent.whatsapp.net/v/t39.8562-34/178505650_460141378430025_2455877548463147186_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=WXfqn59KRBIAX_kZWpf&_nc_ht=scontent.whatsapp.net&oh=01_AdRRMt_gOy4pUu8x0T5DP1oRU83cii0rUn2kJnkkJ_2jvg&oe=63917E4C" alt="/" />
                    </div> */}
                </div>

                <div className='w-[1440px] mx-auto h-[898px] flex mt-[56px] justify-between'>
                    <div className='relative h-full w-[704px] text-center bg-[#D8E8EA] pt-[80px]'>
                        <h2 className='text-[34px] font-bold pb-4'>WhatsApp Business App</h2>
                        <p className='w-[563px] my-[18px] mx-auto text-[18px] text-[#1c1e21]'><span className='text-[#39b3ed]'>WhatsApp Business</span> is a free to download app that was built with
                         the small business owner in mind. Create a catalog to showcase your products
                          and services. Connect with your customers easily by using tools to automate,
                           sort and quickly respond to messages.
                        </p>
                        <p className='w-[563px] my-[18px] mx-auto text-[18px] text-[#1c1e21]'>WhatsApp can also help medium and large businesses provide customer support
                             and deliver important notifications to customers. Learn more about <span className='text-[#39b3ed]'>WhatsApp Business API.</span>
                        </p>
                        {/* <div className='absolute bottom-0 w-[380px] h-[415px] mx-auto right-0 left-0'>
                            <img className='w-full' src="https://scontent.whatsapp.net/v/t39.8562-34/191731900_491358315413361_6968938602217354245_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=GJ6L3JwkD7oAX_MRPmW&_nc_ht=scontent.whatsapp.net&oh=01_AdTkwqoUnUCIzzHw6QeDhXgmGKaVa_MTaLPG-XtrIn4F5w&oe=63915BB0" alt="/" />
                        </div> */}
                    </div>
                    <div className='relative h-full w-[704px] text-center bg-[#dcf8c6d0] pt-[80px]'>
                        <div className='w-[350px] h-[350px] bg-[#77d7c8] rounded-full mx-auto flex items-center justify-center'>
                            <p className='bg-white px-[16px] py-[8px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] flex items-center'>hello!<HiLockClosed className='ml-1'/></p>
                        </div>
                        <h4 className='uppercase text-[16px] text-[#5e5e5e] roboto mt-[56px]'>End-to-end Encryption</h4>
                        <h2 className='text-[34px] font-bold text-[#1c1e21]'>Security by Default</h2>
                        <p className='w-[563px] my-[18px] mx-auto text-[18px] text-[#1c1e21]'>Some of your most personal moments are shared on WhatsApp, 
                            which is why we built end-to-end encryption into the latest
                            versions of our app. When end-to-end encrypted, your messages
                            and calls are secured so only you and the person you're communicating with can
                            read or listen to them, and nobody in between, not even WhatsApp.
                        </p>
                    </div>
                </div>
                <Link to="/features" className='uppercase ft-btn mt-[56px] mb-[88px] mx-auto px-[32px] py-[16px] border rounded-[40px] text-[#77d7c8]'>explore features</Link>
            </div>
            <Footer />
    </div>
  )
}

export default Landingpage