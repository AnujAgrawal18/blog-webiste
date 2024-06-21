"use client"

import React from 'react'
import GetData from './getdata';
import { useState, useEffect } from 'react';
import Link from 'next/link'


const Blogs = () => {
    const [data, setdata] = useState([])
    const [pageno, setpageno] = useState(1)

    // const d = async () => {
    //     let a = await GetData()
    //     setdata(a);
    // }
    const d = async()=>{
        let a = await fetch("http://localhost:5173/")
        let data = await a.json();
        if (data) {setdata(data)}
      }
    

    useEffect(() => {
        d()
    }, [])

    const sub = data.filter((element, index) => index >= (pageno - 1) * 3 && index < pageno * 3);
    return (
        <div className='mx-10 text-wrap  w-[100vw] lg:w-[65vw]'>
            <div className='text-[30px] font-bold flex'><img src="https://cdn-icons-png.flaticon.com/128/8236/8236748.png" className="w-[2.5rem] mx-4" alt="" />OUR STORIES</div>
            <div className='h-[70rem] lg:w-[60rem] w-[95vw]'>
                {(sub.length === 0) ? <div className='text-center text-[30px] my-5'>No more Blogs to show</div> :
                    sub.map(item => {
                        return (<>
                            <Link href={{ pathname: '/blogpost',query: {title : item.title , author : item.author , body : item.body , img : item.image , comment : item.comments , date : item.date}}}>
                                <div className='flex h-[20rem]  ml-5 w-[95vw] lg:w-[65vw]  my-10 relative  shadow-[0_0_20px_2px] shadow-green-900' >
                                    <div className='bg-gray-300 px-4 rounded-xl absolute top-7 left-7'>{item.type}</div>
                                    <img src={item.image} className="w-[15rem] m-4" alt="" />
                                    <div className='flex flex-col m-4 justify-between'>
                                        <div className='text-[25px] font-bold'>{item.title} <br /><p className='text-[20px]'>BY {item.author}</p></div>
                                        <div className='flex text-[15px] justify-between items-center px-10'>
                                            <div>{item.date}</div>
                                            <div>.</div>
                                            <div> {item.comments} comments</div>
                                            <div>.</div>
                                            <div>{item.views} views</div>
                                        </div>
                                        <div className='my-4 h-96 overflow-hidden bg-inherit'>{item.body.split(' ').slice(0, 40).join(' ')}...</div>
                                        <div><button className="text-[15px] text-wrap py-1 rounded-xl bg-orange-600 px-2 text-white mb-2 ml-2">READ MORE</button></div>
                                        <div><input type="text" placeholder='Add Comments' className=' bg-gray-100 w-full h-9 rounded-xl px-6 text-black border-2 border-black' /></div>
                                    </div>
                                </div>
                            </Link>
                        </>
                        )
                    }
                    )
                }
            </div>
            <div className='flex justify-center w-full'>
                <div className={(pageno === 1) ? 'border-2 border-black w-10 p-2 px-3 m-3 bg-red-600 text-white' : 'border-2 m-3 border-black w-10 p-2 px-3'} onClick={() => setpageno(1)}>1</div>
                <div className={(pageno === 2) ? 'border-2 border-black w-10 p-2 px-3 m-3 bg-red-600 text-white' : 'border-2 m-3 border-black w-10 p-2 px-3'} onClick={() => setpageno(2)}>2</div>
                <div className={(pageno === 3) ? 'border-2 border-black w-10 p-2 px-3 m-3 bg-red-600 text-white' : 'border-2 m-3 border-black w-10 p-2 px-3'} onClick={() => setpageno(3)}>3</div>
                <div className={(pageno === 4) ? 'border-2 border-black w-10 p-2 px-3 m-3 bg-red-600 text-white' : 'border-2 m-3 border-black w-auto p-2 px-3'} onClick={() => { setpageno(4) }}>4</div>
            </div>
        </div>
    )
}

export default Blogs