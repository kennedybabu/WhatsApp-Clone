import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div className='w-full h-full bg-white relative'>
    <Header />
    <div className='pt-[156px] w-full  pb-[450px]'>
        <div className='text-center'>
          <h2 className='text-[24px] font-bold mb-4'>Login</h2>
          <form className='flex flex-col w-[400px] mx-auto'>
            <input className='my-4 p-4 border' type="email" name="email" id="email" placeholder='email' />
            <input className='my-4 p-4' type="password" name="password" id="password" placeholder='password' />
            
            <button className='uppercase ft-btn my-[16px] mx-auto px-[32px] py-[16px] border rounded-[40px] text-[#77d7c8]'>Sign Up</button>
            <div className='w-full flex items-center justify-between text mt-[24px]'>
              <small>Don't have an account ?</small>
              <Link to="/register">Sign Up</Link>
            </div>
          </form>
        
        </div>
    </div>
    <Footer />
</div>
  )
}

export default Login