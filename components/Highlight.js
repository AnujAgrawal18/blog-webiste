"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";
import Link from 'next/link';


const Highlight = () => {
    const [data, setdata] = useState([])
    const [blogstype, setblogstype] = useState([])
    const { register, handleSubmit } = useForm();
    const ref = useRef()

    const d = async () => {
        let a = await fetch("http://localhost:5173/")
        let data = await a.json();
        if (data) { setdata(data) }
        await types(data)
    }
    const types = async (data) => {
        let type = new Map([])
        type.set("All", data.length)
        data.forEach(element => {
            if (type.has(element.type)) type.set(element.type, type.get(element.type) + 1)
            else type.set(element.type, 1)
        })
        for (let [key, value] of type) {
            let obj = {}
            obj.type = key
            obj.number = value
            setblogstype(prevarray => [...prevarray, obj])
        }
    }
    const onSubmit = async (val) => {
        let item=null
        data.forEach(async(element )=>{
            if(element.title===val.search){
                item=element
                setTimeout(() => {
                    window.location.href = `/blogpost?title=${element.title}&author=${element.author}&body=${element.body}&img=${element.image}&comment=${element.comments}&date=${element.date}`;
                  }, 1000);
            }});

        if(!item) alert("no such blog")
        ref.current.reset()
        

    }

    useEffect(() => {
        d()
    }, [])

    const sub = data.filter((element, index) => index <= 3);
    return (
        <div className=''>
            <div className='text-white bg-green-600 w-96 flex flex-col justify-center items-center'>
                <p className='text-[30px]'>Search Blogs</p>
                <hr className='w-[80%] mx-5 bg-white h-1 my-2' />
                <div>
                    <form action="" method="post" className='flex flex-col justify-center content-center items-center' onSubmit={handleSubmit(onSubmit)} ref={ref}>
                        <input {...register("search")} type="text" placeholder='Search Here..' className='h-11 px-6 my-6 w-[20rem] text-black'/>
                        <button className='w-[20rem] bg-red-500 h-[4rem] text-white font-bold mb-5' type='submit'>SEARCH</button>
                    </form>
                </div>
            </div>
            <div className='bg-green-600 w-96 flex flex-col justify-center items-center text-wrap my-8 py-5'>
                <p className='text-[30px] text-white'>Recent Posts</p>
                {
                    sub.map(item => {
                        return (
                            <Link href={{ pathname: '/blogpost',query: {title : item.title , author : item.author , body : item.body , img : item.image , comment : item.comments , date : item.date}}}>
                            <div className='flex justify-between bg-white w-[23vw] p-3 border-t-2 border-black mx-auto'>
                                <div className=''>
                                    <p className='text-[15px]'>{item.date}</p>
                                    <p className='text-[18px]'>{item.title}</p>
                                </div>
                                <img src={item.image} alt="" className='w-[5rem] ml-1' />
                            </div></Link>
                        )
                    })
                }
            </div>
            <div className='text-white bg-green-600 w-96 flex flex-col justify-center items-center py-5'>
                <p className='text-[30px]'>Categories</p>
                <hr className='w-[80%] mx-5 bg-white h-1 my-2' />
                <div>
                    {
                        blogstype.map(
                            item => {
                                return (
                                    <div className='flex justify-between bg-white w-[22rem] px-3 py-1 border-t-2 border-black text-black'>
                                        <p className='text-[15px]'>{item.type}</p>
                                        <p className='text-[15px]'>({item.number})</p>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Highlight