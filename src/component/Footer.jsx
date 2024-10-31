import React from 'react'
import logo from '../assets/images/logo.png'
function Footer() {
  return (
    <div className='w-[100%] h-[400px] m-[auto] bg-gray-100 flex justify-center mt-10 pt-5'>
        <div className='p-3 w-[250px] cursor-pointer'>
            <div className='flex items-center  mt-5 w-[200px]'>
                <img src={logo} alt="logo" className='w-7'/>
                <p className='font-bold text-[20px] pl-1'>E-learn</p>
            </div>
            <p className='text-[13px] mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id corrupti sapiente</p>
        </div>
        <div className='p-3 w-[250px] mb-10 cursor-pointer'>
           <p className='text-[18px] font-bold mt-5 mb-4'>GET HELP</p>
            <p className='pt-2 text-[13px]'>Contact Us</p>
            <p className='pt-2 text-[13px]'>Latest Articles</p>
            <p className='pt-2 text-[13px]'>FAQ</p>
        </div>
        <div className='p-3 w-[250px] mb-10 cursor-pointer'>
            <p className='text-[18px] font-bold mt-5 mb-4'>PROGRAMS</p>
            <p className='pt-2 text-[14px] hover:text-[#FF782D] hover:font-bold cursor-pointer'>Art & Design</p>
            <p className='pt-2 text-[14px] hover:text-[#FF782D] hover:font-bold cursor-pointer'>IT & Software</p>
            <p className='pt-2 text-[14px] hover:text-[#FF782D] hover:font-bold cursor-pointer'>Business</p>
            <p className='pt-2 text-[14px] hover:text-[#FF782D] hover:font-bold cursor-pointer'>Language</p>
            <p className='pt-2 text-[14px] hover:text-[#FF782D] hover:font-bold cursor-pointer'>Programming</p>
        </div>
        <div className='p-3 w-[290px] mb-10 cursor-pointer'>
            <p className='text-[18px] font-bold mt-5 mb-4'>CONTACT US</p>
            <p className='pt-3 text-[14px]'>Address 3415 cross road london</p>
            <p className='pt-3 text-[14px]'>Tel + [234] 2500-5678988</p>
            <p className='pt-3 text-[14px]'>Mail: supportlms@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer