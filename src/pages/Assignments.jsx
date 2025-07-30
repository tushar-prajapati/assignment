import React, { useState } from "react";
import courses from "../data/courses.json";
import { IoMdArrowDropright } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";



const Assignments = ({ id }) => {
  const course = courses.find((course) => String(course.id) === String(id));
  const assignments = course.assignments;
  const [isOpen, setIsOpen] = useState(true);
  const [showBy, setShowBy] = useState('type');


  return (
    <>
      <div className="p-4 w-full">
        <div className="md:flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder={`Search...`}
            className="border text-sm  border-gray-400 px-3 py-2 rounded-sm md:w-1/6 w-full  focus:outline-none focus:ring focus:border-blue-400"
          />

          <div className="flex items-center mt-6 md:mt-0">
            <button
            onClick={()=>setShowBy('date')}
            className={`${showBy=='date'? "bg-[#03893D] text-white ": "text-gray-600 bg-white"} focus:underline   px-4 py-2 rounded-xs  transition-all text-sm`}>
              SHOW BY DATE
            </button>
            <button
            onClick={()=>setShowBy('type')}
            className={`${showBy=='type'? "bg-[#03893D] text-white ": "text-gray-600 bg-white"} focus:underline    px-4 py-2 rounded-xs  transition-all text-sm`}>
              SHOW BY TYPE
            </button>
          </div>
        </div>


        <div className="my-6 w-full border border-gray-200 rounded overflow-hidden">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 flex h-16 gap-3 items-center justify-between bg-[#F2F4F4] cursor-pointer transition-all"
          >
            <div className="flex items-center gap-2">
              <span
                className={`transform transition-transform duration-300 text-lg ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                <IoMdArrowDropright />
              </span>
              <h2 className="font-semibold text-md">
                {showBy=='date' && "Past "}
                Assignments</h2>
            </div>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {assignments.map((assignment, i) => (
              <div
                key={i}
                className="px-4 flex h-14 gap-4 hover:bg-[#EEF7FF] items-center border-t border-gray-200"
              >
                  <TfiWrite/>
                <div>
                <p className="h-1/2 font-medium hover:underline text-md cursor-pointer">
                  {assignment.title}
                </p>
                <p className="h-1/2 text-xs text-gray-600">
                <span className="font-medium">Closed</span>
          <span className="mx-2">|</span>
         <span className="font-medium"> Due </span>

              {assignment.dueDate}
          <span className="mx-2">|</span>
          {assignment.points} pts
          <span className="mx-2">|</span>
          Not Yet Graded
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignments;
