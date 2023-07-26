import React from 'react'
import analyticsimg from '../assets/analyticsimg.png'

const Analytics = () => {
  return (
    <div className='w-full bg-[#FCFCFC] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={analyticsimg} alt=""/>
            <div className='flex flex-col justify-center'>
                <p className='text-gray-500 font-bold'>SERVICE DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text2xl font-bold py-2'>Manage Service Dashboard Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel in maxime architecto. Deserunt iusto, at illum facilis delectus quas earum itaque sint, sit tempora non porro. Tempora, rem suscipit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eius vitae, quae praesentium, ex debitis dicta ipsum rem repellat, aliquam eaque omnis ducimus eos id tenetur assumenda necessitatibus perspiciatis? Consequatur!</p>
                <button className='bg-[#121212] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#FCFCFC]'>Get Started</button>
            
            </div>
        </div>
        
    </div>
  )
}

export default Analytics