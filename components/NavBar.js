"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <div className='flex justify-between flex-col px-5 content-center items-center h-auto bg-green-600 w-[100vw] overflow-x-hidden lg:flex-row'>
        <div className='text-[50px] text-bold'>BLOGIFY</div>
        <div>
            <ul className='flex justify-center text-center h-[90px]  align-middle box-content text-[]'>
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link href="/" className={(currentPath === "/" ? " font-bold bg-green-800 p-5" : "")}>HOME</Link></li>
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link href="/aboutus" className={(currentPath === "/aboutus" ? " font-bold bg-green-800 p-5" : "")} >ABOUT US</Link></li>    
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link prefetch href="/createblog" className={(currentPath === "/createblog" ? " font-bold bg-green-800 p-5" : "")}>CREATE</Link></li>    
                <li className='px-5 py-8 hover:font-bold hover:cursor-pointer'><Link prefetch href="/contactus" className={(currentPath === "/contactus" ? " font-bold bg-green-800 p-5" : "")}>CONTACT US</Link></li>
            </ul>
        </div>
        <div className='flex justify-center'>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-3xl mr-2"></div>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-3xl mr-2"></div>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-3xl mr-2"></div>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-3xl mr-2"></div>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-3xl mr-2"></div>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-3xl "></div>
        </div>
    </div>
  )
}

export default NavBar