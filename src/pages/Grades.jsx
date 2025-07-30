import React from "react";
import courses from "../data/courses.json";

const Grades = ({ id }) => {
  const handlePrint = () => {
    window.print();
  };

  const course = courses.find((course) => String(course.id) === String(id));
  const assignments = course.assignments;

  return (
    <>
      <div className="w-full md:flex">
        <div className=" w-full p-6">
          <div className="md:flex items-center justify-between">
            <h1 class="text-3xl font-light">Grades for Tushar</h1>
            <button
              onClick={handlePrint}
              className="bg-[#F2F4F4] border transition-all duration-300 border-gray-200 font-light px-4 py-2 rounded cursor-pointer hover:bg-gray-200 flex items-center gap-1 text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 2a2 2 0 00-2 2v3h12V4a2 2 0 00-2-2H6zM4 9a2 2 0 00-2 2v5a1 1 0 001 1h2v2a1 1 0 001 1h8a1 1 0 001-1v-2h2a1 1 0 001-1v-5a2 2 0 00-2-2H4zm4 4h4v4H8v-4z" />
              </svg>
              Print Grades
            </button>
          </div>

          <main className="pt-10">
            <h1 className="font-semibold text-lg">Arrange By</h1>
            <div className="flex items-center">
              <select
                id="arrange"
                className="mt-2 text-lg focus:ring focus:outline-[#006699] font-light border border-gray-300 rounded px-4 py-3 md:w-72"
                defaultValue="Module"
              >
                <option>Module</option>
                <option>Assignment Group</option>
                <option>Due Date</option>
                <option>Name</option>
              </select>
              <button className="bg-[#006699] cursor-pointer text-lg text-white mx-2 px-4 py-2 rounded ">
                Apply
              </button>
            </div>
            <div className="mt-4">
              <div className="flex text-md font-light">
                <p className="z-10 px-4 py-2 border-t-2 border-l-2 border-r-2 border-gray-200 rounded">
                  Assignments
                </p>
                <p className="z-10 text-[#006699] px-4 cursor-pointer transition-all duration-150 py-2 focus:outline-none hover:border-gray-200 hover:border-t hover:border-l hover:border-r rounded hover:text-black">
                  Learning Mastery
                </p>
              </div>

              <div className="border-t-2 border-gray-200 py-8">
                

<div className="w-full overflow-x-auto">
  <table className="min-w-full table-fixed mt-4 text-sm md:text-md">
    <thead className="text-gray-700 text-left border-b">
      <tr>
        <th className="py-2 px-2 w-32">Name</th>
        <th className="py-2 px-2 w-20">Due</th>
        <th className="py-2 px-2 w-24">Submitted</th>
        <th className="py-2 px-2 w-20">Status</th>
        <th className="py-2 px-2 w-20">Score</th>
        <th className="py-2 px-2 w-10"></th>
      </tr>
    </thead>
    <tbody>
      {assignments.map((assignment) => (
        <tr className="border-b border-gray-200 font-light hover:bg-[#EEF7FF]" key={assignment.title}>
          <td className="py-2 px-2 text-[#006699]">
            <div className="text-sm">{assignment.title}</div>
            <div className="text-gray-500 text-xs">Assignments</div>
          </td>
          <td className="py-2 px-2 text-sm text-gray-700">{assignment.dueDate}</td>
          <td className="py-2 px-2 text-sm text-gray-700">N/A</td>
          <td className="py-2 px-2 text-sm text-gray-700">—</td>
          <td className="py-2 px-2 text-sm">📄/ 2</td>
          <td className="py-2 px-2"></td>
        </tr>
      ))}

      <tr className="border-b border-gray-200 font-light hover:bg-[#EEF7FF]">
        <td className="py-4 px-2 text-black font-medium">Assignments</td>
        <td className="py-4 px-2"></td>
        <td className="py-4 px-2"></td>
        <td className="py-4 px-2"></td>
        <td className="py-4 px-2 font-medium">0%</td>
        <td className="py-4 px-2 font-medium">0.00/4.00</td>
      </tr>

      <tr className="border-b border-gray-200 hover:bg-[#EEF7FF] font-medium">
        <td className="py-4 px-2 text-2xl text-black border-t-3 border-gray-600">Total</td>
        <td className="py-4 px-2 border-t-3 border-gray-600"></td>
        <td className="py-4 px-2 border-t-3 border-gray-600"></td>
        <td className="py-4 px-2 border-t-3 border-gray-600"></td>
        <td className="py-4 px-2 border-t-3 border-gray-600 text-xl">0%</td>
        <td className="py-4 px-2 border-t-3 border-gray-600 text-xl">0.00/2.00</td>
      </tr>
    </tbody>
  </table>
</div>

              </div>
            </div>
          </main>
        </div>

        <div className="lg:w-1/5 w-full md:w-1/4 mt-6 px-6">
          <h1 className="font-light text-lg">Total: 0%</h1>
          <button className="bg-[#F2F4F4] mt-2 border transition-all duration-300 border-gray-200 font-light px-4 py-2 rounded cursor-pointer hover:bg-gray-200 flex items-center gap-1 text-md">
            Show All Details
          </button>
          <h1 className="font-medium text-lg py-2 border-b-2 border-gray-200">
            Course assignments are not weighted.
          </h1>
          <div className="py-2 flex items-start gap-1 px-2">
            <input
              type="checkbox"
              className="bg-black h-5 w-5 border border-gray-200"
            />
            <label className="text-lg text-gray-700 font-light">
              Calculate based only on graded assignments
            </label>
          </div>
          <p className="text-md text-gray-700 font-light">
            You can view your grades based on What-If scores so that you know
            how grades will be affected by upcoming or resubmitted assignments.
            You can test scores for an assignment that already includes a score,
            or an assignment that has yet to be graded.
          </p>
        </div>
      </div>
    </>
  );
};

export default Grades;
