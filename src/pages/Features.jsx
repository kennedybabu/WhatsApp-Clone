import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Features = () => {
  return (
    <div className='w-full h-full relative'>
        <Header />
        <div className='w-full bg-[#fff] h-full  pb-[350px]'>
          <div className='w-[1440px] mx-auto h-full flex pt-[90px] justify-between'>
            <div className='w-[704px]'>
                <div className='w-full h-[1152px] pt-[86px] bg-[#fcf2c6] flex flex-col text-center'>
                    <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>texts</p>
                    <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Simple, Reliable Messaging</h3>
                    <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>Message your friends and family for free*. 
                      WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees
                    </p>
                    <div className='w-[382px] h-[720px] mx-auto mt-4'>
                        <img className='w-full h-full' src="https://scontent.whatsapp.net/v/t39.8562-34/187714031_1045351012664566_8001264446477762744_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=XytqEQn0I7MAX_c0HEC&_nc_ht=scontent.whatsapp.net&oh=01_AdQa_AwzdmY20RCu-yzLrnF2wLTiom2_oJ9nwg9Jke6JEw&oe=6391648F" alt="/" />
                    </div>
                    <small className='mt-[30px] text-[16px] text-[#5e5e5e]'>* Data charges may apply. Contact your provider for details.</small>
                </div>
            </div>
            <div className='w-[704px]'>
                <div className='w-full h-[795px] pt-[86px] bg-[#E7F0E4] flex flex-col text-center'>
                  <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>GROUP CHAT</p>
                  <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Groups to keep in touch</h3>
                  <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>
                      Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, 
                      you can share messages, photos, and videos with up to 256 people at once. You can also name your group,
                       mute or customize notifications, and more.
                  </p>
                  <div className='w-[382px] h-[720px] mx-auto mt-4'>
                        <div className='flex w-full justify-end'>
                          <img className='w-[120px] h-[120px]' src="https://scontent.whatsapp.net/v/t39.8562-34/192421540_142194574611525_6595584605694964777_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=EiokzcDMWs8AX8EZqii&_nc_ht=scontent.whatsapp.net&oh=01_AdQsWBG259Ny8Lo5-taZX_mkp9-V3Z1w8y9FPluu41SVgQ&oe=6391436A" alt="/" />
                        </div>
                        <img className='w-[120px] h-[120px]' src="https://scontent.whatsapp.net/v/t39.8562-34/193389815_153710126736438_1869555250439072017_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=KujrQuA5uW4AX9ybYXP&_nc_ht=scontent.whatsapp.net&oh=01_AdTD9eEYWYvPKEBpzgRIEPGmZ0yTP5garVyKFbtb6q-A7g&oe=639206B8" alt="/" />
                        <img className='w-[120px] h-[120px]' src="https://scontent.whatsapp.net/v/t39.8562-34/192889030_1187016195095182_59941905074490852_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=o6sJxhjU3KAAX_QMJvw&_nc_ht=scontent.whatsapp.net&oh=01_AdR4ttlQ8L52YNEy6_GvNJb9lbBYIN4C3QSKmbNSpfQE0A&oe=63910DE7" alt="/" />
                  </div>
                </div>

                <div className='w-full h-[620pxpx] pt-[86px] bg-[#F0F4F9] flex flex-col text-center mt-[24px] relative'>
                  <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>WHATSAPP ON WEB AND DESKTOP</p>
                  <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Keep the Conversation Going</h3>
                  <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you. Download the desktop app or visit web.whatsapp.com to get started</p>
                  <div className='w-full mt-[40px] h-[284px]'>
                      <img className='absolute right-0 bottom-0 w-[382px] h-[284px]' src="https://scontent.whatsapp.net/v/t39.8562-34/189620053_906220896592723_7480002254396312514_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=6-qQk32OiwoAX-VaBK_&_nc_ht=scontent.whatsapp.net&oh=01_AdTR_qk9YR2AwnX0i8dqhoS7rm2WiBHHAL8v-8jqiFjWyA&oe=639154A7" alt="/" />
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Features