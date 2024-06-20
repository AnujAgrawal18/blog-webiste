import React from 'react'

const Highlight = () => {
    return (
        <div className=''>
            <div className='text-white bg-green-600 w-96 flex flex-col justify-center items-center'>
                <p className='text-[30px]'>Search Blogs</p>
                <hr className='w-[80%] mx-5 bg-white h-1 my-2' />
                <div>
                    <input type="search" placeholder='Search Here..' className='h-11 px-6 my-6 w-[20rem]' />
                </div>
            </div>
            <div className='bg-green-600 w-96 flex flex-col justify-center items-center text-wrap my-8 py-5'>
                <p className='text-[30px] text-white'>Recent Posts</p>
                <div className='flex justify-evenly bg-white w-[95%] p-3 border-t-2 border-black'>
                    <div className=''>
                        <p className='text-[15px]'>23 March 2525</p>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="https://cdna.artstation.com/p/assets/images/images/039/740/004/large/artoast8p-quickhappylittlepaintingdownloadresize.jpg?1626796848" alt="" className='w-[5rem] ml-1' />
                </div>
                <div className='flex justify-evenly bg-white w-[95%] p-3 border-t-2 border-black'>
                    <div className=''>
                        <p className='text-[15px]'>23 March 2525</p>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="https://cdna.artstation.com/p/assets/images/images/039/740/004/large/artoast8p-quickhappylittlepaintingdownloadresize.jpg?1626796848" alt="" className='w-[5rem] ml-1' />
                </div>
                <div className='flex justify-evenly bg-white w-[95%] p-3 border-t-2 border-black'>
                    <div className=''>
                        <p className='text-[15px]'>23 March 2525</p>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="https://cdna.artstation.com/p/assets/images/images/039/740/004/large/artoast8p-quickhappylittlepaintingdownloadresize.jpg?1626796848" alt="" className='w-[5rem] ml-1' />
                </div>
                <div className='flex justify-evenly bg-white w-[95%] p-3 border-t-2 border-black'>
                    <div className=''>
                        <p className='text-[15px]'>23 March 2525</p>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <img src="https://cdna.artstation.com/p/assets/images/images/039/740/004/large/artoast8p-quickhappylittlepaintingdownloadresize.jpg?1626796848" alt="" className='w-[5rem] ml-1' />
                </div>
            </div>
            <div className='text-white bg-green-600 w-96 flex flex-col justify-center items-center py-5'>
                <p className='text-[30px]'>Categories</p>
                <hr className='w-[80%] mx-5 bg-white h-1 my-2' />
                <div>
                    <div className='flex justify-between bg-white w-[22rem] px-3 py-1 border-t-2 border-black text-black'>
                        <p className='text-[15px]'>ALL</p>
                        <p className='text-[15px]'>(253)</p>
                    </div>
                    <div className='flex justify-between bg-white w-[22rem] px-3 py-1 border-t-2 border-black text-black'>
                        <p className='text-[15px]'>ALL</p>
                        <p className='text-[15px]'>(253)</p>
                    </div>
                    <div className='flex justify-between bg-white w-[22rem] px-3 py-1 border-t-2 border-black text-black'>
                        <p className='text-[15px]'>ALL</p>
                        <p className='text-[15px]'>(253)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlight