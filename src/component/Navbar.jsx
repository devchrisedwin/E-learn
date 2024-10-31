import React from 'react'
import  '../App.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='w-[90%] m-[auto] h-[50px] flex items-center justify-evenly navbar'>
        <div className='flex items-center justify-center w-[200px]'>
            <img src={logo} alt="logo" />
            <p className='font-bold text-[20px] pl-1'>E-learn</p>
        </div>

        <div className='nav-items'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/courses'><li>Courses</li></Link>
                <li>Blog</li>
                <li>Live Class</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar