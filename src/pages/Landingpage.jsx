import React from 'react'
import Header from '../components/Header'

const Landingpage = () => {
  return (
    <div className='w-full'>
        <Header />
        <div className='pt-[56px] w-full'>
                <div className='w-[788px] h-[573px] mx-auto'>
                    <div>
                        <h3>Simple.Secure.Reliable messaging.</h3>
                        <p>With WhatsApp, you'll get fast, simple, secure messaging and calling
                            for free*, available on phones all over the world.
                        </p>
                        <small>*Data charges may apply. Contact your provider details.</small>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Landingpage