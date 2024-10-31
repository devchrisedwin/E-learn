import React, { useState } from 'react'
import '../App.css'
import CourseGridDisplay from '../component/CourseGridDisplay'
import listIcon from '../assets/images/listIcon.png'
import gridIcon from '../assets/images/gridIcon.png'
import CourseListDisplay from '../component/CourseListDisplay'
import Footer from '../component/Footer'

function Courses() {
    const [isGrid, setIsGrid] = useState(true)

  return (
    <>
    <div className='w-[60%] m-[auto] flex justify-between items-center pt-6'>
        <h2 className='text-[20px] font-bold ml-5'>ALL Courses</h2>
        <div className='flex gap-4 items-center'>
            <input type="search" placeholder='search here' className='border rounded-full outline-none pl-2 p-2'/>
            <img className='cursor-pointer' src={gridIcon} alt="grid display icon" onClick={() => setIsGrid(true)} />
            <img className='cursor-pointer' src={listIcon} alt="list display icon" onClick={() => setIsGrid(false)} />
        </div>
    </div><br /><br />
    <div className='course-grid-display'>
        <div>
            {isGrid ? <CourseGridDisplay/> : <CourseListDisplay/>}
        </div>
        <div className='h-[100%] ml-5 p-5'>
            <div>
            <h5 className='font-bold mb-2'>Course Category</h5>
            <form>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='mobile' className='mt-1 cursor-pointer'/>
                    <label htmlFor="mobile" className='cursor-pointer'>Mobile</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='web-dev' className='mt-1 cursor-pointer'/>
                    <label htmlFor="web-dev" className='cursor-pointer'>Web development</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='data-science' className='mt-1 cursor-pointer'/>
                    <label htmlFor="data-science" className='cursor-pointer'>Data Science</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='cyber' className='mt-1 cursor-pointer'/>
                    <label htmlFor="cyber" className='cursor-pointer'>Cyber Security</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='ai' className='mt-1 cursor-pointer'/>
                    <label htmlFor="ai" className='cursor-pointer'>Artificial Intelligence</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='database' className='mt-1 cursor-pointer'/>
                    <label htmlFor="database" className='cursor-pointer'>DataBase</label>
                </div>
            </form>
            </div>

            <div className='mt-8'>
            <h5 className='font-bold mb-2'>Instructors</h5>
            <form>
                <div className='flex items-center gap-2 mb-1 cursor-pointer'>
                    <input type="checkbox" id='kelvin' className='mt-1 cursor-pointer'/>
                    <label htmlFor="kelvin" className='cursor-pointer'>Kelvin</label>
                </div>
                <div className='flex items-center gap-2 mb-1 cursor-pointer'>
                    <input type="checkbox" id='smith' className='mt-1 cursor-pointer'/>
                    <label htmlFor="smith" className='cursor-pointer'>Smith</label>
                </div>
                <div className='flex items-center gap-2 mb-1 cursor-pointer'>
                    <input type="checkbox" id='john' className='mt-1 cursor-pointer'/>
                    <label htmlFor="john" className='cursor-pointer'>John</label>
                </div>
            </form>
            </div>

            <div className='mt-8'>
            <h5 className='font-bold mb-2'>Price</h5>
            <form>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='all' className='mt-1 cursor-pointer'/>
                    <label htmlFor="all" className='cursor-pointer'>All</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='free' className='mt-1 cursor-pointer'/>
                    <label htmlFor="free" className='cursor-pointer'>Free</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='paid' className='mt-1 cursor-pointer'/>
                    <label htmlFor="paid" className='cursor-pointer'>Paid</label>
                </div>
            </form>
            </div>

            <div className='mt-8'>
            <h5 className='font-bold mb-2'>Level</h5>
            <form>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='all' className='mt-1 cursor-pointer'/>
                    <label htmlFor="all" className='cursor-pointer'>All</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='beginner' className='mt-1 cursor-pointer'/>
                    <label htmlFor="beginner" className='cursor-pointer'>Beginner</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='intermidiate' className='mt-1 cursor-pointer'/>
                    <label htmlFor="intermidiate" className='cursor-pointer'>Intermidiate</label>
                </div>
                <div className='flex items-center gap-2 mb-1'>
                    <input type="checkbox" id='expert' className='mt-1 cursor-pointer'/>
                    <label htmlFor="expert" className='cursor-pointer'>Expert</label>
                </div>
            </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Courses