import React from "react";
import Header from "../../componentes/Header/Header.jsx";
import CourseCard from "../../componentes/CourseCard.jsx";
import courses from "../../data/courses.json";
import Footer from "../../componentes/Footer/Footer.jsx";
import TodoListCard from "../../componentes/Todo/TodoListCard.jsx";

const Dashboard = () => {
  return (
    <>
    <p className="md:hidden w-full  text-center text-white absolute top-4 text-md">Dashboard</p>
    <div className="flex flex-col min-h-screen md:ml-24">
      <div className="flex-grow">
        <div className="flex md:flex-row flex-col lg:px-6">
          <div className="lg:w-5/6 md:3/4 bg-white px-4 py-6">
            <Header studentName="Tushar" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/6 md:h-1/4 md:mt-10">
          <TodoListCard/>
          <div className="bg-white p-4 ">
      <h2 className="text-lg  text-gray-900 mb-2 border-gray-300 border-b pb-1">Recent Feedback</h2>
      <p className="text-sm text-gray-600 mb-4">Nothing for now</p>

      <div className="space-y-2">
        <button className="w-full items-center bg-gray-100 hover:bg-gray-200 duration-300 transition-all text-gray-700 cursor-pointer flex justify-start border-gray-300 border  py-2 px-4 rounded">
          Start a New Course
        </button>
        <button className="w-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-700 cursor-pointer flex justify-start border-gray-300 border py-2 px-4 rounded">
          View Grades
        </button>
      </div>
    </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Dashboard;
