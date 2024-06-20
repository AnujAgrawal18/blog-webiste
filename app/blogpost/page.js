"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
    const searchParams = useSearchParams()
    console.log(searchParams.get('item'))
    return (
        <div className='flex flex-col justify-center items-center my-10 w-[60rem] mx-auto text-center'>
            <img src={searchParams.get('img')} alt="" className=' w-full h-[30rem]' />
            <div className='text-[40px] font-bold'>{searchParams.get('title')}</div>
            <div className='flex text-[25px]'>
                <div className='mx-5'>{searchParams.get('date')}</div>
                <div className='mx-5'>{searchParams.get('author')}</div>
            </div>
            <div className='text-[20px] my-10'>{searchParams.get('body')}</div>
            <div className='flex border-y-2 border-black w-full h-[5rem] justify-between align-middle items-center content-center'>
                <div className='flex'>
                    <p className='text-[20px] font-bold mr-9'>Share This : </p>
                    <div className='flex'>
                        <div className="w-[2.5vw] h-[2.5vw] bg-black rounded-3xl mr-2"></div>
                        <div className="w-[2.5vw] h-[2.5vw] bg-black rounded-3xl mr-2"></div>
                        <div className="w-[2.5vw] h-[2.5vw] bg-black rounded-3xl mr-2"></div>
                    </div>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                    <p className='ml-8'> react, markdown, gatsby, blog</p>
                </div>
            </div>
            <div>
                <p className='text-[30px] font-bold my-8 text-left '>Comments</p>
                <div className='flex w-[90%] mx-auto border-[0.9px] border-black p-3'>
                    <img src="https://rainbowit.net/html/fatima/fatima/assets/img/others/author-1.jpg" alt="" className='rounded-[30rem] w-[6rem] mr-3' />
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='flex text-[20px]'><p className='font-bold mr-4'>John Doe</p><p>OCTOBER 24, 2020</p></div>
                            <div className='p-1 px-2 bg-green-300 rounded-[10rem] mr-5'>Reply</div>
                        </div>
                        <div className='text-left mt-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos autem quis eius quaerat cum blanditiis voluptatem odio culpa veritatis unde optio magnam quia, nemo maxime, aliquid atque in, ad quos?
                        </div>
                    </div>
                </div>
                <div className='flex w-[90%] mx-auto border-[0.9px] border-black p-3'>
                    <img src="https://rainbowit.net/html/fatima/fatima/assets/img/others/author-1.jpg" alt="" className='rounded-[30rem] w-[6rem] mr-3' />
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='flex text-[20px]'><p className='font-bold mr-4'>John Doe</p><p>OCTOBER 24, 2020</p></div>
                            <div className='p-1 px-2 bg-green-300 rounded-[10rem] mr-5'>Reply</div>
                        </div>
                        <div className='text-left mt-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos autem quis eius quaerat cum blanditiis voluptatem odio culpa veritatis unde optio magnam quia, nemo maxime, aliquid atque in, ad quos?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page