import React, {useState} from 'react'
import Navbar from './Navbar'
import Search from "./Search"
import Chats from './Chats';
import {BiArchiveIn} from "react-icons/bi";


const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false)

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
      <div className={showProfile ? `absolute z-50 bg-red-200 top-0 right-0  min-h-full min-w-full transition` :`absolute transition z-50 hidden top-0 right-[100%]  min-h-full min-w-full`}>
          <p onClick={() => handleShowProfile(false)}>back</p>
      </div>
    </div>
  )
}

export default Sidebar