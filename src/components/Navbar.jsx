import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"
import {HiUserGroup} from "react-icons/hi";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {TbCircleDashed} from "react-icons/tb";
import {IoMdMore} from "react-icons/io";

const Navbar = ({handleShowProfile}) => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='h-[59px] bg-[#f0f2f5] w-full flex items-center justify-between px-[16px] py-[10px]'>
      <div>
        <div className='w-[40px] h-[40px] rounded-full' onClick={() => handleShowProfile()}>
          <img src={currentUser.photoURL} alt="/" className='w-full h-full rounded-full' />
        </div>        
        <h2>{currentUser.about}</h2>
      </div>      
      <div className='flex items-center text-[#54656f] w-[190px] justify-between'>
          <HiUserGroup className='text-[24px] cursor-pointer'/>
          <TbCircleDashed className='text-[24px] cursor-pointer'/>
          <BsFillChatLeftTextFill className='text-[24px] cursor-pointer'/>
          <IoMdMore className='text-[24px] cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar