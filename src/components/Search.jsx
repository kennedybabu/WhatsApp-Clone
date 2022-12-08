import React, { useContext, useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter} from "react-icons/bs"
import {FiChevronDown} from "react-icons/fi";
import {BiCheckDouble} from "react-icons/bi"

import { db } from '../Firebase';
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';




const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async (e) => {
    const q = query(collection(db, "users"), where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });

    } catch(error) {
      setError(error)
    }
  }
  const handleKey =(e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    try {
      const response = await getDoc(doc(db, "chats", combinedId))

      if(!response.exists()) {
        await setDoc(doc(db, "chats", combinedId),{messages:[]})

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId+".userInfo"]: {
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId+".userInfo"]: {
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        })

      }


    } catch(error) {
      setError(error)
    }
    setUser(null)
    setUser('')
  }


 

  return (
    <div className='w-full  border-bottom'>
      <div className='flex  pl-[12px] h-[49px] items-center justify-between'>
        <div  className="bg-[#f0f2f5] rounded-[8px] h-[35px] flex items-center pr-[32px] w-[412px]">
          <AiOutlineSearch className='ml-4'/>
          <input value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKey} className="bg-[#f0f2f5] ml-[65px] outline-none border-none" type="text" placeholder='search or start new chat' />
        </div>
        <BsFilter className='text-[20px] mr-2'/>
      </div>


      {/* render searched user */}
     { user && 
      <div onClick={handleSelect} className='bg-[#ffffff] chat w-full group  h-[72px] flex items-center px-[14px] cursor-pointer hover:bg-[#f0eeec] transition'>
            <div className='w-[49px] h-[49px] rounded-full'>
                <img src={user.photoURL} alt="/" className='w-full h-full rounded-full' />
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center border-bottom ml-[15px]'>
                <div className='w-full flex items-center justify-between'>
                  <p className='text-[#111b21] font-[17px]'>{user.displayName}</p>
                  <small className='font-[12px] text-[#667781]'>9:02pm</small>
                </div>
                <div className='w-full relative text-[#667781]'>
                    <p className='font-[14px] flex items-center'><BiCheckDouble className='mr-1'/>I'll definitely forward it</p>
                    <FiChevronDown className='absolute top-0 right-0 font-bold hidden group-hover:block'/>
                </div>
            </div>
        </div>
      }
    </div>
  )
}

export default Search