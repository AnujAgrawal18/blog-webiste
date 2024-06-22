"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <div className='flex justify-between flex-col px-5 content-center items-center h-auto bg-green-600 w-[100vw] overflow-x-hidden lg:flex-row'>
        <div className=' text-[80px] lg:text-[50px] font-extrabold'>BLOGIFY-FUN</div>
        <div>
            <ul className='flex justify-center text-center h-[90px]  align-middle box-content text-[20px]'>
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link href="/" className={(currentPath === "/" ? " font-bold bg-green-800 p-5" : "")}>HOME</Link></li>
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link href="/aboutus" className={(currentPath === "/aboutus" ? " font-bold bg-green-800 p-5" : "")} >ABOUT US</Link></li>    
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link prefetch href="/createblog" className={(currentPath === "/createblog" ? " font-bold bg-green-800 p-5" : "")}>CREATE</Link></li>    
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link prefetch href="/contactus" className={(currentPath === "/contactus" ? " font-bold bg-green-800 p-5" : "")}>CONTACT US</Link></li>
            </ul>
        </div>
        <div className='flex justify-center'>
          <img src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png" className=" w-[6vw] h-[6vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-3xl mr-2"/>
          <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" className="w-[6vw] h-[6vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-3xl mr-2"/>
          <img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" className="w-[6vw] h-[6vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-3xl mr-2"/>
          <img src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png" className="w-[6vw] h-[6vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-3xl mr-2"/>
          <img src="https://cdn-icons-png.flaticon.com/128/4494/4494485.png" className="w-[6vw] h-[6vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-3xl mr-2"/>
          <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" className="w-[6vw] h-[6vw] lg:w-[2.5vw] lg:h-[2.5vw] rounded-3xl mr-2"/>
        </div>
    </div>
  )
}

export default NavBar