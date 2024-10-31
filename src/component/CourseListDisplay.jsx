import React, {useState} from 'react'
import {Courses} from '../data/courses'
import clock from '../assets/images/clock.png'
import studHat from '../assets/images/student1.png'
import levelIcon from '../assets/images/levelIcon.png'
import lessonIcon from '../assets/images/lessonsIcon.png'
import Card from '../component/Card'

function CourseListDisplay() {
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
    <div className='grid grid-cols-3 w-[80%] ml-[240px]'>
      {filterAllCourses.slice(page * 5 - 5, page * 5).map((course) => (
        <div className='border cursor-pointer shadow-slate-400 h-[370px] w-[300px] mb-7 rounded-2xl m-[auto] hover:opacity-[0.6]'>
          <div className='w-[297px] h-[150px] m-[auto]'>
              <img className='w-[300px]' src={course.poster} alt="" />
          </div><br />

          <div className='ml-3 p-1 mt-1'>
              <p className='text-[13px]'>by Kelvin Brooks</p>
              <p className='font-bold'>{course.name}</p>
          </div>
          <div className='flex gap-2 ml-3 p-1'>
              <div className='flex items-center gap-1'>
                  <img className='w-[10px] h-[10px]' src={clock} alt="weeks" />
                  <span className='text-[12px]'>2 weeks</span>
              </div>
              <div className='flex items-center gap-1'>
                  <img className='w-[15px] h-[15px]' src={studHat} alt="student hat icon" />
                  <span className='text-[12px]'>150 students</span>
              </div>
          </div>

          <div className='flex gap-2 ml-3 p-1 mt-1'>
              <div className='flex items-center gap-1'>
                <img className='w-[15px] h-[15px]' src={levelIcon} alt="student hat icon" />
                <span className='text-[12px]'>All Levels</span>
              </div>
              <div className='flex items-center gap-1'>
                <img className='w-[15px] h-[15px]' src={lessonIcon} alt="student hat icon" />
                <span className='text-[12px]'>20 lessons</span>
              </div>
          </div>
          <hr className='w-[90%] m-[auto] mt-6'/>
          <div className='ml-3 pt-1 flex justify-between items-center'>
              <div>
                <del className='opacity-[0.5]'>$140</del> <span className='text-green-700 font-semibold'>Free</span>
              </div>
              <div className='mr-3 font-bold'>
                  <p>view more</p>
              </div>
          </div>
        </div>
      ))}
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

export default CourseListDisplay