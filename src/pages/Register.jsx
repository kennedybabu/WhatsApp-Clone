import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {IoMdImages} from "react-icons/io"
import { auth, storage, db } from "../Firebase"
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    console.log('clicked')
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const about = e.target[2].value
    const password = e.target[3].value
    const file = e.target[4].files[0]

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on( 
    
        (error) => {
          // Handle unsuccessful uploads
          setError(error)
        }, 
        () => {          
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,

            })

            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              about,
              photoURL:downloadURL,
            })        
            
            await setDoc(doc(db, "userChats", response.user.uid), {

            })

            navigate('/home')
          });          
        }
      );
   
    } catch(error) {
      setError(error)
    }
  }

  

  return (
    <div className='w-full h-full bg-white relative'>
        <Header />
        <div className='pt-[156px] w-full  pb-[450px]'>
            <div className='text-center'>
              <h2 className='text-[24px] font-bold mb-4'>Create Account</h2>
              <form className='flex flex-col w-[400px] mx-auto' onSubmit={handleSubmit}>
                <input className='my-4 border p-4' type="text" placeholder='display name' name='name'/>
                <input className='my-4 p-4 border' type="email" name="email" id="email" placeholder='email' />
                <textarea type="text"  name='about' id="about" placeholder='About'></textarea>
                <input className='my-4 p-4' type="password" name="password" id="password" placeholder='password' />

                <label className='flex items-center cursor-pointer text-[#1cb39b]' htmlFor="file"><IoMdImages className='text-4xl mr-2 cursor-pointer' /><small>Add an Avatar</small></label>
                <input className='hidden' type="file" name="file" id="file" />
                <button className='uppercase ft-btn my-[16px] mx-auto px-[32px] py-[16px] border rounded-[40px] text-[#77d7c8]'>Sign Up</button>
                <div className='w-full flex items-center justify-between text mt-[24px]'>
                  <small>Have an account already?</small>
                  <Link to="/login">Login</Link>
                </div>
              </form>
            
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register