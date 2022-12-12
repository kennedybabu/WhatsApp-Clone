import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
 

const Message = ({message}) => {
  const {data} = useContext(ChatContext)
  const {currentUser} = useContext(AuthContext)

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  },[])

  return (
    <div ref={ref} className={`flex flex-col w-full message my-4 ${message.senderId === currentUser.uid && "owner"}`}>
       {message.text &&
        <div className='txt bg-white message shadow-md border px-2 py-1 h-max w-max rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]'>
            <p className='font-[14px] text-[#111b21]'>{message.text}</p>
            <div className='w-full text-right'>
                <p className='text-[#667781] text-[12px]'>9:20 pm</p>
            </div>            
        </div>}
     {message.img &&
        <div className='w-[277px] max-h-[300px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]'>
          <img src={message.img} alt="/" className='w-full h-full' />
        </div>
        }
    </div>
        
  )
}

export default Message