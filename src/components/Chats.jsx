import React from 'react'
import {FiChevronDown} from "react-icons/fi";


const Chats = () => {
  return (    
     <div className='w-full'>
     <div className='w-full h-[72px] flex items-center px-[14px] cursor-pointer hover:bg-[#f0eeec] transition'>
         <div className='w-[49px] h-[49px] bg-red-300 rounded-full'>

         </div>
         <div className='w-full h-full flex flex-col items-center justify-center border-bottom ml-[15px]'>
             <div className='w-full flex items-center justify-between'>
               <p className='text-[#111b21] font-[17px]'>Ritaj</p>
               <small className='font-[12px] text-[#667781]'>9:02pm</small>
             </div>
             <div className='w-full relative text-[#667781] group'>
                 <p className='font-[14px]'>I'll definitely forward it</p>
                 <FiChevronDown className='top-0 right-0 font-bold hidden group-hover:absolute'/>
             </div>
         </div>
     </div>
   </div>
  )
}

export default Chats