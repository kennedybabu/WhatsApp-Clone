import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter} from "react-icons/bs"
import {FiChevronDown} from "react-icons/fi";
import {BiCheckDouble} from "react-icons/bi"

import { db } from '../Firebase';
import { collection, query, where, getDocs } from "firebase/firestore";




const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

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


 

  return (
    <div className='w-full  border-bottom'>
      <div className='flex  pl-[12px] h-[49px] items-center justify-between'>
        <div  className="bg-[#f0f2f5] rounded-[8px] h-[35px] flex items-center pr-[32px] w-[412px]">
          <AiOutlineSearch className='ml-4'/>
          <input onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKey} className="bg-[#f0f2f5] ml-[65px] outline-none border-none" type="text" placeholder='search or start new chat' />
        </div>
        <BsFilter className='text-[20px] mr-2'/>
      </div>


      {/* render searched user */}
     { user && 
      <div className='bg-[#ffffff] chat w-full group  h-[72px] flex items-center px-[14px] cursor-pointer hover:bg-[#f0eeec] transition'>
            <div className='w-[49px] h-[49px] bg-red-300 rounded-full px-6'>
                <img src={user.photoURL} alt="/" />
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