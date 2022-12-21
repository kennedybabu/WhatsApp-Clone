import React, {useContext, useState} from 'react'
import Navbar from './Navbar'
import Search from "./Search"
import Chats from './Chats';
import {BiArchiveIn} from "react-icons/bi";
import {BsArrowLeft} from "react-icons/bs"
import { AuthContext } from '../context/AuthContext';
import {MdEdit} from "react-icons/md"
import { motion } from 'framer-motion';


const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const {currentUser} = useContext(AuthContext)

  

  const handleShowProfile = () => {
    setShowProfile(!showProfile)
  }
  console.log(showProfile)
  return (
    <div className='sidebar w-[567px] overflow-x-hidden bg-[#ffffff] relative'>
      <Navbar handleShowProfile={handleShowProfile} />
      <Search />
      <div className='w-full h-[49px] flex items-center cursor-pointer'>
        <div className='ml-[14px]  px-[14px] w-[49px]'>
          <BiArchiveIn className='text-[#00a884] text-[18px]'/>
        </div>
        <div className='border-bottom ml-[15px] w-full h-full flex items-center'>
          <p className='text-[17px]'>Archived</p>          
        </div>
      </div>

      {/* chats */}
      <div className='charts-window w-full overflow-y-scroll scrollbar-hidden'>
        <Chats />
      </div>
      <div className={showProfile ? `absolute z-50 bg-[#f0f2f5] top-0 right-0  min-h-full min-w-full transition` :`absolute transition z-50 hidden top-0 right-[100%]  min-h-full min-w-full`}>
          
          <div className='w-full h-[107px] bg-[#008069] pt-0 pr-[20px] pb-0 pl-[23px] flex items-end'>
              <div className='w-full flex h-[59px] items-center text-white font-bold'>
                <BsArrowLeft onClick={() => handleShowProfile(false)} className='mr-4 cursor-pointer' /><p onClick={() => handleShowProfile(false)} className='cursor-pointer'>Profile</p>
              </div>             
          </div>
          <div className='w-full h-[200px] my-[28px] bg-[#f0f2f5]'>
              <div className='w-[200px] h-[200px] rounded-full mx-auto'>
                  <img src={currentUser.photoURL} alt="/" className='w-full h-full rounded-full'/>
              </div>
          </div>
          <div className='w-full h-[92px] bg-[#ffffff] px-[30px] py-[14px] shadow-md mb-[10px]'>
            <div className='w-full'>
              <small className='text-[#008069] text-[14px]'>Your name</small>
            </div>
            <div className='w-full flex justify-between items-center text-[#3b4a54]'>
              <p className='text-[17px]  my-2'>{currentUser.displayName}</p>
              <MdEdit className='cursor-pointer'/>
            </div>            
          </div>
          <div className='w-full px-[30px] mb-[30px] mt-[4px]'>
              <p className='text-[#8696a0] text-[14px]'>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
          </div>
          <div className='w-full h-[92px] bg-[#ffffff] px-[30px] py-[14px] shadow-md mb-[10px]'>
          <div className='w-full'>
              <small className='text-[#008069] text-[14px]'>About</small>
            </div>
            <div className='w-full flex justify-between items-center text-[#3b4a54]'>
              <p className='text-[17px]  my-2'>{currentUser.about}</p>
              <MdEdit className='cursor-pointer'/>
            </div> 
          </div>
      </div>
    </div> 
  )
}

export default Sidebar