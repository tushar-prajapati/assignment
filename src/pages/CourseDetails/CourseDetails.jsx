import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import courses from "../../data/courses.json";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import Overview from "../Overview.jsx";
import Assignments from "../Assignments.jsx";
import Grades from "../Grades.jsx";




const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((course) => String(course.id) === String(id));
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Overview");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <p className="md:hidden w-full text-center text-white absolute top-4 text-xs">
        {course.code} <br /> Modules
      </p>
      <div className="absolute md:hidden w-full top-5 flex justify-end pr-4">
        <IoIosArrowDown onClick={toggleSidebar} className=" text-white " />
      </div>

      <div className=" md:px-6 lg:ml-24 md:ml-12">
        <header className="h-20 border-b border-gray-200 hidden md:flex mb-4">
          <div className="flex h-full w-1/8 justify-between items-center">
            <button
              className="p-2 cursor-pointer "
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <span className="block w-6 h-0.5 bg-[#2B7ABC] mb-1"></span>
              <span className="block w-6 h-0.5 bg-[#2B7ABC] mb-1"></span>
              <span className="block w-6 h-0.5 bg-[#2B7ABC]"></span>
            </button>

            <div className="flex">
              <h1 className="text-lg font-light text-[#2B7ABC] hover:underline cursor-pointer">
                {course.code}
              </h1>
              <p className="flex font-light items-center text-lg">
                <IoIosArrowForward className="font-light" /> Modules
              </p>
            </div>
          </div>
        </header>

        <div className=" md:flex min-h-screen w-full  text-gray-800">
          {showSidebar && (
            <aside className="md:w-48 shadow-2xl md:shadow-none w-full bg-white md:pt-6">
              <nav>
                <ul className="md:space-y-4 text-sm md:text-lg text-[#2B7ABC]">
                  <li
                    onClick={() => setSelectedTab("Overview")}
                    className={`flex items-center md:hover:underline cursor-pointer pl-1 py-1 ${
                      selectedTab == "Overview" &&
                      " md:border-l-2 md:border-black md:text-black font-semibold"
                    }`}
                  >
                    <AiOutlineHome className="md:hidden text-sm"/>

                    Overview
                  </li>
                  <li
                    onClick={() => setSelectedTab("Assignments")}
                    className={`flex items-center md:hover:underline cursor-pointer pl-1 py-1 ${
                      selectedTab == "Assignments" &&
                      " md:border-l-2 md:border-black md:text-black font-semibold"
                    }`}
                  >
                    <MdOutlineAssignmentTurnedIn className="md:hidden text-sm"/>
                    Assignments
                  </li>
                  <li
                    onClick={() => setSelectedTab("Grades")}
                    className={`flex items-center md:hover:underline cursor-pointer pl-1 py-1 ${
                      selectedTab == "Grades" &&
                      " md:border-l-2 md:border-black md:text-black font-semibold"
                    }`}
                   
                  >
                     <GrScorecard className="md:hidden text-sm"/>
                    Grades
                  </li>
                </ul>
              </nav>
            </aside>
          )}
          {selectedTab == 'Overview' && <Overview id={id}/>}
          {selectedTab == 'Assignments' && <Assignments id={id}/>}
          {selectedTab == 'Grades' && <Grades id={id}/>}
          


        </div>
      </div>
    </>
  );
};

export default CourseDetails;
