import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../Firebase'
import Message from './Message'


const Messages = () => {
  const [messages,setMessages]= useState([])
  const {data} = useContext(ChatContext)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=> {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unsub()
    }
  },[data.chatId])

  return (
    <div className='overflow-y-scroll px-[97px]'>
      {messages.map(m => (
        <Message message={m} key={m.id} />
      ))}        
    </div>
  )
}

export default Messages