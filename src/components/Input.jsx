import React from 'react'
import {AiFillAudio} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {MdAttachFile} from "react-icons/md"

const Input = () => {
  return (
    <div className='w-full h-[62px] bg-[#f0f2f5] absolute bottom-0 left-0'>
      <form className='flex items-center h-full w-full px-[15px] py-[5px]'>
        <div className='h-full flex items-center w-[26px]'>
          <label htmlFor="emoji"><BsEmojiSmile className='text-[26px] cursor-pointer' /></label>
          <input type="text" name='emoji'className='hidden' />
        </div>

        <div className='h-full flex items-center w-[26px] mx-4'>
          <label htmlFor="file"><MdAttachFile className='text-[24px] cursor-pointer' /></label>
          <input type="file" name='file' className='hidden' />
        </div>

        <input className='w-full px-[10px] py-[9px] rounded-[8px] h-[42px]' type="text" placeholder='Type a message' />

        <AiFillAudio className='text-[24px] mx-[5px]'/>
      </form>
    </div>
  )
}

export default Input