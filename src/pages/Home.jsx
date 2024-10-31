import React, { useEffect, useState } from 'react'
import Hero from '../component/Hero'
import heroImage from '../assets/images/hero-img.png'
import Button from '../component/Button'
import Card from '../component/Card'
import categories from '../data/categories'
import {featureCourses} from '../data/courses'

import studHat from '../assets/images/student1.png'
import studentIcon from '../assets/images/studentSvg.png'
import clock from '../assets/images/clock.png'
import banner from '../assets/images/BANNER.png'
import banner2 from '../assets/images/banner2.png'
import svgImage from '../assets/images/Vector.png'
import quote from '../assets/images/quote.png'
import articles from '../data/articles'
import Footer from '../component/Footer'


function Home() {

    const [category, setCategory] = useState(categories)
    const [featureCourse, setFeatureCourse] = useState(featureCourses)
    const [article, setArticle] = useState(articles)

    const [filterData, setFilterData] = useState(featureCourses)
    const [filterArticle, setFilterArticles] = useState(articles)

    function handleCourseFilter(filterCourse) {
        let filteredCourse = featureCourse.filter((item) => {
            return item.category === filterCourse.category
        })
        setFilterData(filteredCourse)
    }


    function handleArticleFilter(filterArticle) {
        let filteredArticle = article.filter((item) => {
            return item.category === filterArticle.category
        })
        setFilterArticles(filteredArticle)
    }

  return (
    <div>
        <Hero>
            <div>
                <div className=' w-[550px] p-10 m-[auto] mt-[140px] ml-[290px]'>
                    <h1 className='font-bold text-[30px]'>Unlock Your Potential with Our E-Learning Platform</h1>
                    <p className='mt-2 mb-4 font-semibold'>
                    Welcome to E-learn, where education meets innovation! Our platform 
                    offers a diverse range of courses designed to inspire 
                    and equip you with the skills you need to succeed in today’s fast-paced world.
                    </p>
                    <Button>Explore Courses</Button>
                </div>
            </div>
         
            <div className='h-[100px]'>
                <img className='h-[500px] ml-[100px]' src={heroImage} alt="hero section image" />
            </div>
        </Hero> 

        <div>
            <div className='flex items-center justify-between pt-5 w-[80%] m-[auto]'>
                <div className='ml-[170px]'>
                    <h2 className='text-[25px] font-bold'>Top categories</h2>
                    <p className='font-semibold'>Explore our Popular Categories</p>
                </div>
                <div className='mr-[180px] border rounded-full p-3 w-[150px] text-center font-bold'>
                    <button>All Categories</button>
                </div>
            </div>

            
            <Card>
                {
                category.map((item) => (
                    <div onClick={() => handleCourseFilter(item)} className='border cursor-pointer flex flex-col justify-center items-center shadow-slate-400 h-[150px] w-[170px] rounded-md m-[auto] mb-2 hover:opacity-[0.6]'>
                        <div className='w-[150px] m-[auto] p-2'>
                            <img className='w-[30px] m-[auto] mb-1' src={item.icon} alt="" />
                            <p className='text-center font-bold'>{item.category}</p>
                        </div>
                    </div>
                ))
                }
            </Card>
        
        </div>

        <div>
            <div className='flex items-center justify-between pt-5 w-[80%] m-[auto]'>
                <div className='ml-[170px]'>
                    <h2 className='text-[25px] font-bold'>Featured Courses</h2>
                    <p className='font-semibold'>Explore our Popular Courses</p>
                </div>
                <div className='mr-[180px] border rounded-full p-3 w-[150px] text-center font-bold'>
                    <button onClick={() => setFilterData(featureCourses)}>All Courses</button>
                </div>
            </div>

            
            <Card>
                {filterData && filterData.length > 0 ?
                filterData.map((item) => (
                    <div className='border cursor-pointer shadow-slate-400 h-[320px] w-[285px] rounded-2xl m-[auto] mb-2 hover:opacity-[0.6]'>
                        <div className='w-[290px] h-[150px] m-[auto]'>
                            <img className='w-[285px]' src={item.poster} alt="" />
                        </div><br />

                        <div className='ml-3 p-1 mt-1'>
                            <p className='text-[13px]'>by Kelvin Brooks</p>
                            <p className='font-bold'>{item.name}</p>
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
                )): <div className='w-[200px] m-[auto]'>
                    <p className='text-center font-bold'>No Course Found</p>
                </div>
                }
            </Card>
        
        </div>

        <div className='border w-[60%] m-[auto] rounded-2xl mt-9'>
            <img src={banner} alt="a banner" />
        </div>

        <Card>
            <div className='border cursor-pointer flex flex-col justify-center items-center shadow-slate-400 h-[130px] w-[200px] rounded-md m-[auto] mb-2 hover:opacity-[0.6]'>
                <div className='w-[150px] m-[auto] p-2'>
                    <p className='mb-1 text-[#FF782D] text-[25px] font-bold text-center'>25K+</p>
                    <p className='text-center font-bold text-[12px]'>Active students</p>
                </div>
            </div>
            <div className='border cursor-pointer flex flex-col justify-center items-center shadow-slate-400 h-[130px] w-[200px] rounded-md m-[auto] mb-2 hover:opacity-[0.6]'>
                <div className='w-[150px] m-[auto] p-2'>
                    <p className='mb-1 text-[#FF782D] text-[25px] font-bold text-center'>899</p>
                    <p className='text-center font-bold text-[12px]'>Total Courses</p>
                </div>
            </div>
            <div className='border cursor-pointer flex flex-col justify-center items-center shadow-slate-400 h-[130px] w-[200px] rounded-md m-[auto] mb-2 hover:opacity-[0.6]'>
                <div className='w-[150px] m-[auto] p-2'>
                    <p className='mb-1 text-[#FF782D] text-[25px] font-bold text-center'>158</p>
                    <p className='text-center font-bold text-[12px]'>Instrutors</p>
                </div>
            </div>
            <div className='border cursor-pointer flex flex-col justify-center items-center shadow-slate-400 h-[130px] w-[200px] rounded-md m-[auto] mb-2 hover:opacity-[0.6]'>
                <div className='w-[150px] m-[auto] p-2'>
                    <p className='mb-1 text-[#FF782D] text-[25px] font-bold text-center'>100%</p>
                    <p className='text-center font-bold text-[12px]'>Satisfaction Rate</p>
                </div>
            </div>
        </Card>

        <div className='grid grid-cols-2 w-[60%] m-[auto] mt-10'>
            <div>
                <img src={svgImage} alt="an svg image" />
            </div>
            <div className='p-7'>
                <h2 className='text-[25px] font-bold w-[230px] ml-7 mt-5'>Grow Your Skill With E-Learn LMS</h2>
                <p className='font-semibold ml-7 mt-4'>
                 Our platform offers a diverse range of courses 
                 designed to inspire and equip you with the skills you need
                </p>
                <button className='ml-7 mt-5 rounded-2xl bg-[#FF782D] p-3 text-white font-bold'>Explore Courses</button>
            </div>
        </div>

        <div className='border w-[60%] m-[auto] rounded-2xl mt-9'>
            <img src={banner2} alt="a banner" />
        </div>

        <div className=' w-[60%] m-[auto] text-center mt-6'>
            <h2 className='text-[25px] font-bold'>Students feedbacks</h2>
            <p className='text-[12px] font-semibold'>What Students Say About E-Learn LMS</p>
        </div>

        <Card>
            <div className='border cursor-pointer shadow-slate-400 h-[320px] w-[235px] rounded-2xl m-[auto] mb-2'>
                <div className='w-[220px] h-[120px] m-[auto] p-3'>
                    <img src={quote} alt="a quote image"  className='mt-5'/>
                    <p className='mt-3'>
                     I love how easy it is to access study materials 
                     and submit my homework. The platform is user-friendly 
                     and keeps me organized.
                    </p>
                    <p className='mt-7 font-bold'>Sarah Lee,</p>
                    <p className='mt-2 opacity-[0.7]'>Software Engineer</p>
                </div>
            </div>
            <div className='border cursor-pointer shadow-slate-400 h-[320px] w-[235px] rounded-2xl m-[auto] mb-2'>
                <div className='w-[220px] h-[120px] m-[auto] p-3'>
                    <img src={quote} alt="a quote image"  className='mt-5'/>
                    <p className='mt-3'>
                     I love how easy it is to access study materials 
                     and submit my homework. The platform is user-friendly 
                     and keeps me organized.
                    </p>
                    <p className='mt-7 font-bold'>Sarah Lee,</p>
                    <p className='mt-2 opacity-[0.7]'>Software Engineer</p>
                </div>
            </div>
            <div className='border cursor-pointer shadow-slate-400 h-[320px] w-[235px] rounded-2xl m-[auto] mb-2'>
                <div className='w-[220px] h-[120px] m-[auto] p-3'>
                    <img src={quote} alt="a quote image"  className='mt-5'/>
                    <p className='mt-3'>
                     I love how easy it is to access study materials 
                     and submit my homework. The platform is user-friendly 
                     and keeps me organized.
                    </p>
                    <p className='mt-7 font-bold'>Sarah Lee,</p>
                    <p className='mt-2 opacity-[0.7]'>Software Engineer</p>
                </div>
            </div>
            <div className='border cursor-pointer shadow-slate-400 h-[320px] w-[235px] rounded-2xl m-[auto] mb-2'>
                <div className='w-[220px] h-[120px] m-[auto] p-3'>
                    <img src={quote} alt="a quote image"  className='mt-5'/>
                    <p className='mt-3'>
                     I love how easy it is to access study materials 
                     and submit my homework. The platform is user-friendly 
                     and keeps me organized.
                    </p>
                    <p className='mt-7 font-bold'>Sarah Lee,</p>
                    <p className='mt-2 opacity-[0.7]'>Software Engineer</p>
                </div>
            </div>
        </Card>

        <div className='banner h-[200px] w-[60%] m-[auto] flex justify-evenly items-center rounded-2xl'>
            <div className='flex items-center gap-5'>
                <img src={studentIcon} alt="" className='w-[100px]' />
                <p className='font-bold'>Lets start with academy LMS </p>
            </div>

            <div className='flex gap-3'>
                <button className='border border-[#FF782D] p-3 w-[150px] rounded-full text-[#FF782D]'>I'm a Student</button>
                <button className='bg-[#FF782D] rounded-full w-[200px] text-white'>Become an Instructor</button>
            </div>
        </div><br />

        <div className='flex items-center justify-between pt-5 w-[80%] m-[auto]'>
            <div className='ml-[170px]'>
                <h2 className='text-[25px] font-bold'>Latest Articles</h2>
                <p className='font-semibold'>Explore our Free article</p>
            </div>
            <div className='mr-[180px] border rounded-full p-3 w-[150px] text-center font-bold'>
                <button onClick={() => setFilterArticles(articles)}>All Articles</button>
            </div>
        </div>


        <Card>
            {filterArticle && filterArticle.length > 0 ?
            filterArticle.map((item) => (
                <div className='border cursor-pointer shadow-slate-400 h-[320px] w-[285px] rounded-2xl m-[auto] mb-2 hover:opacity-[0.8]'>
                    <div className='w-[290px] h-[150px] m-[auto]'>
                        <img className='w-[285px]' src={item.poster} alt="" />
                    </div><br />

                    <div className='ml-3 p-1 mt-1'>
                        <p className='font-bold'>{item.name}</p>
                    </div>
                    <div className='flex gap-2 ml-3 p-1'>
                        <div className='flex items-center gap-1'>
                            <img className='w-[15px] h-[15px]' src={clock} alt="weeks" />
                            <span className='text-[12px]'>24 Jan 2024</span>
                        </div>
                    </div>
                    <div className='ml-3 pt-1 flex justify-between items-center'>
                        <div className='mr-3 opacity-[0.7] text-[12px]'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum minus beatae 
                            ipsum cum debitis non, maiores.
                            </p>
                        </div>
                    </div>
                </div>
            )): <div className='w-[200px] m-[auto]'>
                <p className='text-center font-bold'>No article Found</p>
            </div>
            }
        </Card>

        <Footer/>
    </div>
  )
}

export default Home