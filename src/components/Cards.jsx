import React from 'react'
import flexible from "../assets/flexible.png"
import fast from "../assets/fast.png"
import cheap from "../assets/cheap.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#FCFCFC]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-[#FCFCFC]' src={flexible} alt=''/>
                <h2 className='text-2xl font-bold text-center py-8'>Flexible</h2>
                <p className='text-center font-medium text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente necessitatibus aspernatur cupiditate suscipit tempore id vitae fuga quod? Temporibus soluta quis id nam eaque fugiat eligendi. Eius, a reiciendis!</p>

            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-[#FCFCFC]' src={fast} alt=''/>
                <h2 className='text-2xl font-bold text-center py-8'>Fast</h2>
                <p className='text-center font-medium text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente necessitatibus aspernatur cupiditate suscipit tempore id vitae fuga quod? Temporibus soluta quis id nam eaque fugiat eligendi. Eius, a reiciendis!</p>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-[#FCFCFC]' src={cheap} alt=''/>
                <h2 className='text-2xl font-bold text-center py-8'>Cheap</h2>
                <p className='text-center font-medium text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente necessitatibus aspernatur cupiditate suscipit tempore id vitae fuga quod? Temporibus soluta quis id nam eaque fugiat eligendi. Eius, a reiciendis!</p>
            </div>
        </div>
    </div>
  )
}

export default Cards