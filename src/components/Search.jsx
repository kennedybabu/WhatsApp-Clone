import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter} from "react-icons/bs"


const Search = () => {
  return (
    <div className='w-full h-[49px] pl-[12px] border-bottom'>
      <div className='flex h-full items-center justify-between'>
        <div  className="bg-[#f0f2f5] rounded-[8px] h-[35px] flex items-center pr-[32px] w-[412px]">
          <AiOutlineSearch className='ml-4'/>
          <input  className="bg-[#f0f2f5] ml-[65px]" type="text" placeholder='search or start new chat' />
        </div>
        <BsFilter className='text-[20px] mr-2'/>
      </div>
    </div>
  )
}

export default Search