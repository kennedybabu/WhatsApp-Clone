import React from 'react'
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"

const Home = () => {
  return (
    <div className='w-full h-screen relative'> 
      <div className='h-[127px] bg-[#00a884] w-full'>

      </div>
      <div>
      <div className='home-container right-0 left-0 mx-auto my-auto top-0 bottom-0 h-full bord flex absolute'>
        <Sidebar />
        <Chat />
      </div>     
      </div>
    </div>
  )
}

export default Home