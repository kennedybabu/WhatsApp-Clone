import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {HiLockClosed} from "react-icons/hi"


const Features = () => {
  return (
    <div className='w-full h-full relative'>
        <Header />
        <div className='w-full bg-[#fff] h-full pb-[350px]'>
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

                <div className='relative w-full h-[679px] pt-[86px] bg-[#d8e8ea] mt-[24px] flex flex-col text-center'>
                    <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>whatsapp voice and video calls</p>
                    <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Speak Freely</h3>
                    <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>
                      With voice calls, you can talk to your friends and family for free*, 
                      even if they're in another country. And with free* video calls, you can 
                      have face-to-face conversations for when voice or text just isn't enough. 
                      WhatsApp voice and video calls use your phone's Internet connection, instead of your 
                      cell plan's voice minutes, so you don't have to worry about expensive calling charges.
                    </p>
                    <small className='mt-[30px] text-[16px] text-[#5e5e5e]'>* Data charges may apply. Contact your provider for details.</small>
                    <div className='absolute bottom-0 right-0 left-0 w-[453px] h-[265px] mx-auto'>
                        <img className='w-full h-full' src="https://scontent.whatsapp.net/v/t39.8562-34/185147482_157199459626985_7037521108409229340_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=01-1bn8LOpAAX_X76Ec&_nc_ht=scontent.whatsapp.net&oh=01_AdRWNVxNLuT14iNYCMZttQeiypCKbiRqLg54NWih0QlfUQ&oe=63918C66" alt="/" />
                    </div>
                </div>

                <div className='relative w-full h-[768px] bg-[#fcf2c6] mt-[24px] flex flex-col text-center'>
                    <div className='w-[382px] h-[441px] top-0 right-0 left-0 mx-auto pb-[32px]'>
                        <img className='w-full h-full' src="https://scontent.whatsapp.net/v/t39.8562-34/185414037_829557024605674_6973978005665666022_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=hbLEje-T9SMAX9-WbEv&_nc_ht=scontent.whatsapp.net&oh=01_AdS8QkB1ewHxG4LB7yNEyVTqRh8-cieyNosvqA859zbcVA&oe=6392BE6E" alt="/" />
                    </div>
                    <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>photos and videos</p>
                    <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Share Moments that Matter</h3>
                    <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>
                      Send photos and videos on WhatsApp instantly. You can even capture 
                      the moments that matter to you most with a built-in camera. With WhatsApp,
                      photos and videos send quickly even if you're on a slow connection.
                    </p>
                </div>

                <div className='relative w-full h-[679px] pt-[86px] bg-[#fcf2c6] mt-[24px] flex flex-col text-center'>
                    <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>Documents</p>
                    <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Document Sharing Made Easy</h3>
                    <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>
                      Send PDFs, documents, spreadsheets, slideshows and more, without the
                      hassle of email or file sharing apps. You can send documents up to 100 MB, 
                      so it's easy to get what you need over to who you want.
                    </p>
                    <div className='absolute bottom-0 right-0 left-0 w-[383px] h-[317px] mx-auto'>
                        <img className='w-full h-full' src="https://scontent.whatsapp.net/v/t39.8562-34/185279401_583460593038170_8035663609126382982_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=Fa9b0lBsGUMAX8N5JRg&_nc_ht=scontent.whatsapp.net&oh=01_AdT_MDZjjvR0J0txR5GjyUUwBwnxUnHc8SzvzaFSntn6_Q&oe=639121FF" alt="/" />
                    </div>
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

                <div className='relative h-[798px] w-[704px] text-center bg-[#dcf8c6d0] pt-[80px] mt-[24px]'>
                    <div className='w-[350px] h-[350px] bg-[#77d7c8] rounded-full mx-auto flex items-center justify-center'>
                        <p className='bg-white px-[16px] py-[8px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] flex items-center'>hello!<HiLockClosed className='ml-1'/></p>
                    </div>
                    <h4 className='uppercase text-[16px] text-[#5e5e5e] roboto mt-[56px]'>End-to-end Encryption</h4>
                    <h2 className='text-[34px] font-bold text-[#1c1e21]'>Security by Default</h2>
                    <p className='w-[563px] my-[18px] mx-auto text-[18px] text-[#1c1e21]'>Some of your most personal moments are shared on WhatsApp, 
                        which is why we built end-to-end encryption into the latest
                        versions of our app. When end-to-end encrypted, your messages
                        and calls are secured so only you and the person you're communicating with can
                        read or listen to them, and nobody in between, not even WhatsApp.
                    </p>
                </div>

                <div className='relative w-full h-[583px] bg-[#d8e8ea] mt-[24px] flex flex-col text-center'>
                    <div className='w-[382px] h-[304px] top-0 right-0 left-0 mx-auto pb-[32px]'>
                        <img className='w-full h-full' src="https://scontent.whatsapp.net/v/t39.8562-34/189660652_297631595188463_4270236316996839237_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=QskeOU9VGyMAX9J5K1v&_nc_ht=scontent.whatsapp.net&oh=01_AdR-B9f3lfHh9cqA5Ef8FS3XC2zNfbmz6cBkQ7Nh0cKvOA&oe=6392B281" alt="/" />
                    </div>
                    <p className='text-[16px] text-[#5e5e5e] uppercase mb-[2px]'>voice messages</p>
                    <h3 className='text-[28px] text-[#1c1e21] font-semibold'>Say Whats On Your Mind</h3>
                    <p className='text-[16px] text-[#5e5e5e] w-[480px] mx-auto my-4'>
                      Sometimes, your voice says it all. With just one tap you can record
                      a Voice Message, perfect for a quick hello or a longer story.
                    </p>
                </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Features