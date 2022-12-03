import React from 'react'
import Input from "../components/Input"
import {AiOutlineSearch} from "react-icons/ai";
import {IoMdMore} from "react-icons/io";


const Chat = () => {
  return (
    <div className='basis-2/3 relative'>
      <div className='w-full bg-[#f0f2f5] h-[59px] flex justify-between py-[10px] px-[16px]'>
        <div className='h-full flex items-center'>
            <div className='h-[40px] w-[40px] rounded-full bg-red-400'>

            </div>
            <p className='text-[#111b21] font-[16px] ml-[15px]'>Nemo</p>
        </div>
        <div className='h-full flex items-center text-[24px]'>
            <AiOutlineSearch className='mr-[16px]'/>
            <IoMdMore />
        </div>
      </div>
      <div className='bg-green-100 h-[500px]'>
        chats
      </div>
      <Input />
    </div>
  )
}

export default Chat