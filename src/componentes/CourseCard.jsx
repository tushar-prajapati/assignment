import React from 'react';
import { useNavigate } from 'react-router-dom';


const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    const handleClick = (e) =>{
        e.preventDefault();
        navigate(`/courses/${course.id}`)

    }
  return (
    <div className="bg-white shadow-md shadow-gray-400 rounded-lg max-w-96 overflow-hidden">
      <div className="bg-[#586874] h-24 flex items-center justify-center">

        <span className="text-white text-3xl">{course.title[0]}</span>
      </div>
      <div className="p-4">
        <div className='flex justify-between'>
        <div>
        <h2 className="text-gray-700 font-semibold">{course.title}</h2>
        <p className="text-sm text-gray-600">{course.instructor}</p>
        </div>
        <div>
            <p><br /></p>
            <p className='text-sm'>Completed: <span className='font-bold '>{course.progress}%</span></p>
        </div>
        </div>
        <div className="mt-2 w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-[#2B7ABC] h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
          
        </div>
        <button
        onClick={handleClick}
        className="mt-3 w-full text-center py-1 border border-[#2B7ABC] text-black cursor-pointer rounded hover:bg-blue-50 text-sm">
          Go to Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
