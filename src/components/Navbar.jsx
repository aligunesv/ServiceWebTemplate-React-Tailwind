import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const[nav, setNav] = useState(true)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#FCFCFC]'>
        <h1 className='w-full text-3xl font-bold text-gray-500'>imvora.com</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-[#303030] h-full bg-[#252525] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-gray-500 m-4'>imvora.com</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-[#303030]'>Home</li>
                <li className='p-4 border-b border-[#303030]'>Company</li>
                <li className='p-4 border-b border-[#303030]'>Resources</li>
                <li className='p-4 border-b border-[#303030]'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar