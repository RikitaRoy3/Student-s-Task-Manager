import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Taskslist = () => {


  
  const hasFetched = useRef(false);
  
  useEffect(() => {
    if (!hasFetched.current) {
      pressedRegister();
      hasFetched.current = true;
    }
  }, []);

  let [id, setid] = useState("");
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [profilePic, setProfilePic] = useState("");
  let [completedTasks, setCompletedTasks] = useState([]);
  let [pendingTasks, setPendingTasks] = useState([]);


  /* ===================== connecting Backend's SIGNUP ===================== */
  
  
  
  
  let pressedRegister = async (event) => {
    // event.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/tasklist", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    res.ok
      ? toast.success("Successful !!")
      : toast.error(data.message);

    setid(data.user._id);
    setFullName(data.user.fullName);
    setEmail(data.user.email);
    setProfilePic(data.user.profilePic);
    setCompletedTasks(data.user.completedTasks);
    setPendingTasks(data.user.pendingTasks);

    console.log("id:", data.user._id);
    console.log("fullName:", data.user.fullName);
    console.log("email:", data.user.email); 
    console.log("profilePic:", data.user.profilePic);
    console.log("completedTasks:", data.user.completedTasks);
    console.log("pendingTasks:", data.user.pendingTasks);
    
  };




  const tasks = [
    // {
    //   name: "Read Chapter 4",
    //   date: "03-Jul-2024",
    //   priority: "High",
    //   status: "Pending",
    // },
    // {
    //   name: "Biology Assignment",
    //   date: "01-Jul-2024",
    //   priority: "Low",
    //   status: "Pending",
    // },
    // {
    //   name: "Essay writing",
    //   date: "20-Jul-2024",
    //   priority: "Medium",
    //   status: "Pending",
    // },
    // {
    //   name: "History revision",
    //   date: "01-Jul-2024",
    //   priority: "High",
    //   status: "Pending",
    // },
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Task List</h1>
        <p className="text-gray-500">Manage your tasks and deadlines</p>
      </div>

      <table className="w-full text-left bg-white rounded-lg overflow-hidden border shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 font-semibold text-gray-700">Task</th>
            <th className="p-4 font-semibold text-gray-700">Due Date</th>
            <th className="p-4 font-semibold text-gray-700">Priority</th>
            <th className="p-4 font-semibold text-gray-700">Status</th>
            <th className="p-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>

          
          {pendingTasks.map((task, index) => (
            <tr key={index} className="border-t hover:bg-gray-50 transition">
              <td className="p-4 font-medium text-gray-900">{task.TaskTitle}</td>
              <td className="p-4 text-gray-600">{task.DueDate}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${task.Priority === "High"
                      ? "bg-red-100 text-red-700"
                      : task.Priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                >
                  {task.Priority}
                </span>
              </td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  Pending
                </span>
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm p-1 rounded hover:bg-blue-50 transition">
                    Edit
                  </button>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm p-1 rounded hover:bg-green-50 transition">
                    Complete
                  </button>
                </div>
              </td>
            </tr>
          ))}




          {completedTasks.length > 0 &&
          completedTasks.map((task, index) => (
            <tr key={index} className="border-t hover:bg-gray-50 transition">
              <td className="p-4 font-medium text-gray-900">{task.TaskTitle}</td>
              <td className="p-4 text-gray-600">{task.DueDate}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${task.Priority === "High"
                      ? "bg-red-100 text-red-700"
                      : task.Priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                >
                  {task.Priority}
                </span>
              </td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  Completed
                </span>
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm p-1 rounded hover:bg-blue-50 transition">
                    Edit
                  </button>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm p-1 rounded hover:bg-green-50 transition">
                    Complete
                  </button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      {(pendingTasks.length + completedTasks.length) === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-500 mb-6">
            Get started by adding your first task
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            <Link to="/add">Add Task</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Taskslist;
