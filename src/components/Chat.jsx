import React, { useContext } from 'react'
import Input from "../components/Input"
import {AiOutlineSearch} from "react-icons/ai";
import {IoMdMore} from "react-icons/io";
import Messages from './Messages';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const {data} = useContext(ChatContext)

  return (
    <div className='w-full relative'>
      <div className='w-full bg-[#f0f2f5] h-[59px] flex justify-between py-[10px] px-[16px]'>
        <div className='h-full flex items-center cursor-pointer'>
            <div className='h-[40px] w-[40px] rounded-full bg-red-400'>

            </div>
            <p className='text-[#111b21] font-[16px] ml-[15px]'>{data.user?.displayName}</p>
        </div>
        <div className='h-full flex items-center text-[24px]'>
            <AiOutlineSearch className='mr-[16px]'/>
            <IoMdMore />
            <p onClick={() => signOut(auth)} className="cursor-pointer text-sm">logout</p>
        </div>
      </div>
      <div className='py-2 chats'>
        <Messages />
      </div>
      <Input />
    </div>
  )
}

export default Chat