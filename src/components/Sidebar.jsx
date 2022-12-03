import React from 'react'
import Navbar from './Navbar'
import Search from "./Search"
import Chats from './Chats';
import {BiArchiveIn} from "react-icons/bi";



const Sidebar = () => {
  return (
    <div className='sidebar basis-1/3 max-w-[467px]'>
      <Navbar />
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
      <Chats />
    </div>
  )
}

export default Sidebar