import React from 'react'

const Message = ({message}) => {
  return (
    <div className='flex w-full message'>
        <div className='txt bg-white message shadow-md border px-2 py-1 rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] '>
            <p className='font-[14px] text-[#111b21]'>Can't deny there</p>
            <div className='w-full text-right'>
                <p className='text-[#667781] text-[12px]'>9:20 pm</p>
            </div>
        </div>
    </div>
        
  )
}

export default Message