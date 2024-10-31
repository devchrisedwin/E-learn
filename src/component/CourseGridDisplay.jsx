import React, {useState} from 'react'
import  '../App.css'
import {Courses} from '../data/courses'
import clock from '../assets/images/clock.png'
import studHat from '../assets/images/student1.png'
import levelIcon from '../assets/images/levelIcon.png'
import lessonIcon from '../assets/images/lessonsIcon.png'

function CourseGridDisplay() {

    const [allCourses, setAllCourses] = useState(Courses)
    const [filterAllCourses, setFilterAllCourses] = useState(Courses)
    const [page, setPage] = useState(1)

    function handlePagination(selectedPage) {
        if(selectedPage > 0 && selectedPage !== page && selectedPage <= Math.ceil(filterAllCourses.length / 5)) {
            setPage(selectedPage)
        }    
    }

  return (
    <>
    <div>
        <div>

            {filterAllCourses.slice(page * 5 - 5, page * 5).map((course) => (
                <div className='border w-[73%] m-[auto] float-right h-[185px] rounded-2xl flex mb-5'>
                    <div className='single-course'>
                        <img src={course.poster} alt="" className='w-[300px]' />
                    </div>
                    <div>
                        <div className='ml-3 p-1 mt-1'>
                            <p className='text-[13px]'>by Kelvin Brooks</p>
                            <p className='font-bold'>{course.name}</p>
                        </div>
                        <div className='flex gap-2 ml-3 p-1'>
                            <div className='flex items-center gap-1'>
                                <img className='w-[15px] h-[15px]' src={clock} alt="weeks" />
                                <span className='text-[12px]'>2 weeks</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-[15px] h-[15px]' src={studHat} alt="student hat icon" />
                                <span className='text-[12px]'>150 students</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-[15px] h-[15px]' src={levelIcon} alt="student hat icon" />
                                <span className='text-[12px]'>All Levels</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-[15px] h-[15px]' src={lessonIcon} alt="student hat icon" />
                                <span className='text-[12px]'>20 lessons</span>
                            </div>
                        </div>
                        <hr className='w-[560px] m-[auto] ml-3 mt-6'/>
                        <div className='ml-3 pt-5 flex gap-[400px]'>
                            <div>
                               <del className='opacity-[0.5]'>$140</del> <span className='text-green-700 font-semibold'>Free</span>
                            </div>
                            <div className='mr-3 font-bold cursor-pointer'>
                                <p>view more</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <div className='w-[1%] m-[auto] mt-5'>
        <span onClick={()=> handlePagination(page - 1)} 
        className='border p-2 mr-2 cursor-pointer'>Prev</span>
            {[...Array(Math.ceil(filterAllCourses.length / 5))].map((_, i) => (
                <span onClick={()=>handlePagination(i + 1)} className='border p-2 ml-1 cursor-pointer'>{i + 1}</span>
            ))}
        <span onClick={() => handlePagination(page + 1)}
        className='border p-2 ml-2 cursor-pointer'>Next</span>
    </div>
    </>
  )
}

export default CourseGridDisplay