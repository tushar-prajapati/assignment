import { RxCross1 } from "react-icons/rx";

const todoList = [
  {
    title: "Urgent Assignment",
    subject: "AI",
    points: 2,
    due: "Jul 29 at 11:59pm",
  },
  {
    title: "Project Proposal",
    subject: "Web Tech",
    points: 5,
    due: "Jul 30 at 6:00pm",
  },
  {
    title: "Reading Quiz",
    subject: "Cybersecurity",
    points: 3,
    due: "Aug 2 at 9:00am",
  },
  {
    title: "Weekly Report",
    subject: "Cloud Computing",
    points: 4,
    due: "Aug 4 at 11:00am",
  },
];

 function TodoListCard() {
  return (
    <div className="bg-white p-4 w-full max-w-sm">
      <h2 className="text-lg text-gray-900  mb-2 border-b font-semibold border-gray-300 pb-1">To Do</h2>

      <ul className="space-y-3">
        {todoList.map((task, idx) => (
          <li key={idx} className="flex justify-between items-start gap-3">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-gray-700 hover:cursor-pointer"
              />
              <div>
                <a href="#" className="text-gray-600 hover:underline font-medium">
                  {task.title}
                </a>
                <div className="text-sm text-gray-600">{task.subject}</div>
                <div className="text-sm text-gray-600">
                  {task.points} points &nbsp;|&nbsp; {task.due}
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <RxCross1 className="hover:cursor-pointer" size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListCard;