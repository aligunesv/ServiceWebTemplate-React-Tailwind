import React from 'react'

const News = () => {
  return (
    <div className='w-full py-16 text-[#FCFCFC] px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 flex flex-col justify-center'>
                <h1 className='md:text-5xl sm:text-4xl text-xl'>Do you want to stay up to date?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-[#121212]' type="email" placeholder='Enter Email' />
                    <button className='bg-[#FCFCFC] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[#121212]'>Get Started</button>
                </div>
                <p>We care about protection of your data. Read our <span className='text-gray-500'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default News