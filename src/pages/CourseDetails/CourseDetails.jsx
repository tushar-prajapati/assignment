import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from 'react-router-dom';
import courses from '../../data/courses.json'




const CourseDetails = () => {
  const  {id} = useParams();
  const course = courses.find(course => String(course.id) === String(id));

  return (
    <>
        <p className="md:hidden w-full text-center text-white absolute top-4 text-xs">{course.code} <br /> Modules</p>
        <div className='absolute md:hidden w-full top-5 flex justify-end pr-4'>
        <IoIosArrowDown className=' text-white '/>
        </div>
        <div className="md:pl-12 lg:pl-24 flex min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        <nav>
          <ul className="space-y-4">
            <li className="font-bold">Dashboard</li>
            <li className="text-blue-600">Course Detail</li>
            <li>Grades</li>
            <li>Inbox</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500">Dashboard / Course Detail</div>

        {/* Course Content */}
        <section className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h1 className="text-2xl font-bold">Course Title</h1>
          <p className="text-gray-600">
            Welcome to this course! Here you'll find all the resources, assignments, and updates.
          </p>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-72 hidden xl:block border-l p-4 bg-white">
        {/* To Do */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">To Do</h2>
          <div className="space-y-4">
            <div className="border p-3 rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 font-medium">Urgent Assignment</a>
                <span className="cursor-pointer">✕</span>
              </div>
              <div className="text-sm text-gray-600">AI</div>
              <div className="text-sm text-gray-700">2 points | Jul 29 at 11:59pm</div>
            </div>
            <div className="border p-3 rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 font-medium">Quiz 1</a>
                <span className="cursor-pointer">✕</span>
              </div>
              <div className="text-sm text-gray-600">ML</div>
              <div className="text-sm text-gray-700">5 points | Aug 2 at 9:00am</div>
            </div>
          </div>
        </div>

        {/* Recent Feedback */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Recent Feedback</h2>
          <p className="text-sm text-gray-600 mb-4">Nothing for now</p>
          <button  className="w-full mb-2">Start a New Course</button>
          <button  className="w-full">View Grades</button>
        </div>
      </aside>
    </div>
    </>
  )
}

export default CourseDetails






