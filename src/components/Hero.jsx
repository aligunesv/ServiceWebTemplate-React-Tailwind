import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-gray-500 font-bold p-2'>ARE YOU READY FOR GROW WITH US</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>use our service.</h1>
            <p className='text-gray-500 font-bold p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit deleniti nisi rerum quidem! Aliquid beatae incidunt illo vero! Est facilis nam accusamus. Tenetur ipsam ex itaque nisi in ullam..</p>
            <button className='bg-[#FCFCFC] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#121212] hover:bg-gray-500 duration-300 hover:text-[#fcfcfc]' >Get Started</button>
        </div>
    </div>
  )
}

export default Hero