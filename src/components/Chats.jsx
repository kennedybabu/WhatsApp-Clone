import React, { useContext, useEffect, useState } from 'react'
import {FiChevronDown} from "react-icons/fi";
import {BiCheckDouble} from "react-icons/bi";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';



const Chats = () => {
  const [chats, setChats] = useState([])

  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)


  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
    });
      return () => {
        unsub()
      }
    }
    currentUser.uid && getChats()  
  }, [currentUser.uid])

  const handleSelect = (user) => {
    dispatch({type: "CHANGE_USER", payload: user})
  }

  
  return (    
  <div className='w-full h-[530px] scrollbar-hidden'>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map(chat => (
         <div onClick={() => handleSelect(chat[1].userInfo)} key={chat[0]} className='bg-[#ffffff] chat w-full group  h-[72px] flex items-center px-[14px] cursor-pointer hover:bg-[#f0eeec] transition'>
          <div className='w-[49px] h-[49px] rounded-full'>
              <img src={chat[1].userInfo.photoURL} alt="/" className='w-full h-full rounded-full'/>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center border-bottom ml-[10px]'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-[#111b21] font-[17px]'>{chat[1].userInfo.displayName}</p>
              <small className='font-[12px] text-[#667781]'>9:02pm</small>
            </div>
            <div className='w-full relative text-[#667781]'>
                <p className='font-[14px] flex items-center'><BiCheckDouble className={`mr-1`}/>{chat[1].lastMessage?.text}</p>
                <FiChevronDown className='absolute top-0 right-0 font-bold hidden group-hover:block'/>
            </div>
          </div>
       </div> 
      ))}
   </div>
  )
}

export default Chats