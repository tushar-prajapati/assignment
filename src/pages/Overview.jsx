import React from "react";
import TodoListCard from "../componentes/Todo/TodoListCard.jsx";
import { IoStatsChartSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import courses from "../data/courses.json";
import { GoPaperclip } from "react-icons/go";
import { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Overview = ({ id }) => {
  const course = courses.find((course) => String(course.id) === String(id));

  const [openModules, setOpenModules] = useState({});
  const [allCollapsed, setAllCollapsed] = useState(false);

  useEffect(() => {
    if (course?.modules?.length) {
      const initialOpen = {};
      course.modules.forEach((mod) => {
        initialOpen[mod.moduleNumber] = true;
      });
      setOpenModules(initialOpen);
    }
  }, [course]);

  const toggleModule = (moduleNumber) => {
    setOpenModules((prev) => ({
      ...prev,
      [moduleNumber]: !prev[moduleNumber],
    }));
  };

  const toggleAllModules = () => {
    const newState = {};
    course.modules.forEach((mod) => {
      newState[mod.moduleNumber] = allCollapsed; 
    });
    setOpenModules(newState);
    setAllCollapsed((prev) => !prev); 
  };

  return (
    <>
      <main className="flex-1 p-6 space-y-6">
        <div className="">
          <h1 className="text-black text-3xl">Recent Announcenments</h1>
        </div>
        <div>
          <div className="flex w-full justify-end ">
            <button
              onClick={toggleAllModules}
              className="rounded text-lg font-light px-4 py-2 hover:bg-[#E5E9E9] transition-all duration-200 cursor-pointer bg-[#F2F4F4]"
            >
              {allCollapsed ? "Expand All" : "Collapse All"}
            </button>
          </div>
          {/* Iterative div */}

          {course.modules.map((module) => {
            const isOpen = openModules[module.moduleNumber];

            return (
              <div
                key={module.moduleNumber}
                className="my-6 w-full border border-gray-200 rounded overflow-hidden"
              >
                <div
                  onClick={() => toggleModule(module.moduleNumber)}
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
                    <h2 className="font-semibold text-md">{module.title}</h2>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {module.files.map((file) => (
                    <div
                      key={`file-${file.fileNumber}`}
                      className="px-4 flex h-14 gap-4 hover:bg-[#EEF7FF] items-center border-t border-gray-200"
                    >
                      <GoPaperclip className="text-lg text-gray-600" />
                      <p className="font-semibold hover:underline cursor-pointer">
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/*Div iteration ends */}
        </div>
      </main>

      <div className="lg:w-1/6 w-full md:w-1/4 mt-6">
        <div className="space-y-2 px-2">
          <button className="w-full gap-1  items-center bg-[#F2F4F4] hover:bg-gray-200 duration-300 transition-all text-gray-700 cursor-pointer flex justify-start border-gray-300 border  py-3 px-4 rounded">
            <IoStatsChartSharp />
            View Course Stream
          </button>
          <button className="w-full gap-1 items-center bg-[#F2F4F4] hover:bg-gray-200 transition-all duration-300 text-gray-700 cursor-pointer flex justify-start border-gray-300 border py-3 px-4 rounded">
            <RxCross1 />
            Drop this Course
          </button>
          <button className="w-full gap-1  items-center bg-[#F2F4F4] hover:bg-gray-200 duration-300 transition-all text-gray-700 cursor-pointer flex justify-start border-gray-300 border  py-3 px-4 rounded">
            <CiCalendarDate className="text-2xl" />
            View Course Calender
          </button>
          <button className="w-full gap-1  items-center bg-[#F2F4F4] hover:bg-gray-200 duration-300 transition-all text-gray-700 cursor-pointer flex justify-start border-gray-300 border  py-3 px-4 rounded">
            <FaRegBell />
            View Course Notifications
          </button>
        </div>

        <TodoListCard />
        <div className="bg-white p-4 ">
          <h2 className="text-lg  text-gray-900 mb-2 border-gray-300 border-b pb-1 font-semibold">
            Recent Feedback
          </h2>
          <p className="text-sm text-gray-600 mb-4">Nothing for now</p>
        </div>
      </div>
    </>
  );
};

export default Overview;
