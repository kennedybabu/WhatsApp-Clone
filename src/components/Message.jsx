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
                <p className='text-[#667781] text-[12px]'>{}</p>
            </div>            
        </div>}
     {message.img &&
        <div className='w-[277px] max-h-[300px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-white rounded-[5px] p-2 shadow-md'>
          <img src={message.img} alt="/" className='w-[98%] h-[99%] rounded-[5px] shadow-md mx-auto' />
        </div>
        }
    </div>
        
  )
}

export default Message