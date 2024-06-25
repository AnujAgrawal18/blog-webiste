"use client"

import React from 'react'
import { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { parseISO, format } from 'date-fns';

const page = () => {
    const ref = useRef()
    const { register, handleSubmit } = useForm();
    const [url, seturl] = useState();

    const onSubmit = async (val) => {
        if (val.author.length === 0 || val.body.length === 0 || val.type.length === 0 || val.title.length === 0) {
            alert("field is missing")
        }
        else {
            val.comments = 65
            val.views = "96k"
            val.image = url
            const date = parseISO(val.date);
            val.date = format(date, 'd LLLL yyyy')
            let blog = localStorage.getItem("blogs")
            // if (blogs) {
            //     setdata(JSON.parse(blogs))
            // }
            // await fetch("/api", { method: "POST", body: JSON.stringify(val), headers: { 'content-type': 'application/json' } })
            localStorage.setItem("blogs", JSON.stringify([val,...JSON.parse(blog)]))
            ref.current.reset()
        }
    }

    const hiddenInputRef = useRef();
    const { ref: registerRef, ...rest } = register("image");
    const handleUploadedFile = (event) => {
        const file = event.target.files[0];
        const urlImage = URL.createObjectURL(file);
        seturl(urlImage);
    };

    return (
        <div>
            <div className='text-center relative'>
                <img src="https://wallpapers.com/images/hd/dark-landscape-1920-x-1080-wallpaper-6wud47myq7kpelbd.jpg" alt="" className='w-full h-52  ' />
                <p className='absolute top-[4rem] text-center font-extrabold text-white text-[50px] w-full shadow-xl'>CREATE YOUR BLOG</p>
            </div>
            <form action="" method="post" className='flex flex-col justify-center items-center content-center align-middle my-5' onSubmit={handleSubmit(onSubmit)} ref={ref}>
                <input {...register("title")} type="text" placeholder="Enter title of your blog" className='border-2 border-gray-300 h-[3.5rem] w-[30rem] p-5 m-3' />
                <input {...register("author")} type="text" placeholder="Enter Author's name" className='border-2 border-gray-300 h-[3.5rem] w-[30rem] p-5 m-3' />
                <input {...register("type")} type="text" placeholder='Type of blog' className='border-2 border-gray-300 h-[3.5rem] w-[30rem] p-5 m-3' />
                <textarea {...register("body")} type="text" placeholder='Write your Blog' className='border-2 border-gray-300 h-[13rem] w-[30rem] p-5' />
                <input {...register("date")} type="date" className='border-2 border-gray-300 h-[3.5rem] w-[30rem] p-5 m-3' />
                <input type="file" name="image" {...rest} onChange={handleUploadedFile} ref={(e) => { registerRef(e); hiddenInputRef.current = e; }} className='border-2 border-gray-300 h-[3.5rem] w-[30rem] p-3 m-3' />
                <button className='w-[30rem] bg-red-500 h-[4rem] text-white font-bold' type='submit'>SUBMIT BLOG</button>
            </form>
        </div>
    )
}

export default page