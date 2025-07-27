import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


const CourseDetails = () => {
  return (
    <>
        <p className="md:hidden w-full text-center text-white absolute top-4 text-md">Course Details</p>
        <div className='absolute md:hidden w-full top-5 flex justify-end pr-4'>
        <IoIosArrowDown className=' text-white '/>
        </div>
    </>
  )
}

export default CourseDetails