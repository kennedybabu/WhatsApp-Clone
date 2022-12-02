import React from 'react'
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"

const Home = () => {
  return (
    <div className='w-full h-screen p-4'>
      <div className='w-full h-full border flex'>
        <Sidebar />
        <Chat />
      </div>     
    </div>
  )
}

export default Home