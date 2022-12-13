import React, { useContext, useState } from 'react'
import {AiFillAudio} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {MdAttachFile} from "react-icons/md"
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../Firebase"

const Input = () => {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)
  const [error, setError] = useState('')
  const {data} = useContext(ChatContext)
  const {currentUser} = useContext(AuthContext)


  const handleSend = async (e) => {
    e.preventDefault()

    if(img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(          
        (error) => {
          setError(error)
        }, 
        () => {
      
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion ({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })             
          });
          
        }
      ); 

    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion ({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }


    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId+'.lastMessage']: {
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId+'.lastMessage']: {
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    setText("")
    setImg(null)
  };

  return (
    <div className='w-full h-[62px] bg-[#f0f2f5] absolute bottom-0 left-0'>
      <form className='flex items-center h-full w-full px-[15px] py-[5px]'>
        <div className='h-full flex items-center w-[26px]'>
          <BsEmojiSmile className='text-[26px] cursor-pointer' />
          {/* <input type="text" name='emoji'className='hidden' /> */}
        </div>

        <div className='h-full flex items-center w-[26px] mx-4'>
          <label htmlFor="file"><MdAttachFile className='text-[24px] cursor-pointer' /></label>
          <input type="file" name='file' id='file' className='hidden' onChange={(e) => setImg(e.target.files[0])} />
        </div>

        <input value={text} className='w-full px-[10px] py-[9px] rounded-[8px] h-[42px] outline-none border-none' type="text" placeholder='Type a message' onChange={(e) => setText(e.target.value)}/>
        <button type="submit" onClick={(e) => handleSend(e)} className='hidden'>s</button>

        <AiFillAudio className='text-[24px] mx-[10px] cursor-pointer'/>
      </form>
    </div>
  )
}

export default Input