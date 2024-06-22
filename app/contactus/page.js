"use client"
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
        <div className='text-center relative'>
                <img src="https://wallpapers.com/images/hd/dark-landscape-1920-x-1080-wallpaper-6wud47myq7kpelbd.jpg" alt="" className='w-screen h-52' />
                <p className='absolute top-[4rem] text-center font-extrabold text-white text-[50px] w-full shadow-xl'>CONTACT US</p>
            </div>
            <div className="flex justify-center p-16 py-28 align-middle items-center w-[80vw]">
                <div className="w-full mx-10 text-wrap text-center">
                    <p className="text-[40px] text-black font-extrabold my-5">Hello Guys! Welcome to My Writing World, Where Are You Where Words Matter.</p>
                </div>
            </div>
            <img src="https://rainbowit.net/html/fatima/fatima/assets/img/banner/contact-banner.jpg" alt="" className='w-[90%]'/>
            <div className='flex flex-col justify-center items-center w-[61vw] h-auto p-10'>
                <p className='text-[30px] my-5'>SEND US A MESSAGE</p>
                <div className='flex flex-row justify-center align-middle items-center'>
                    <div className='flex flex-col'>
                        <input type="text" placeholder='Full Name' className='border-2 border-gray-300 h-[3.5rem] w-[28vw] p-5 m-3' />
                        <input type="text" placeholder='Enter Your Email' className='border-2 border-gray-300 h-[3.5rem] w-[28vw] p-5 m-3'/>
                        <input type="text" placeholder='Subject' className='border-2 border-gray-300 h-[3.5rem] w-[28vw] p-5 m-3'/>
                    </div>
                    <textarea name="" id="" placeholder='Write Your Message Here' className='border-2 border-gray-300 h-[13rem] w-[28vw] p-5'></textarea>
                </div>
                <button className='w-full bg-red-500 h-[4rem] text-white font-bold w-[55vw]'>SUBMIT MESSAGE</button>
            </div>

    </div>
  )
}

export default page