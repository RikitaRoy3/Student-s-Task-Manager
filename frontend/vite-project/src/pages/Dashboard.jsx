// import React from 'react'

// function Dashboard() {
//   const status={
//     total: 12,
//     completed: 5,
//     pending:7
//   };
//   const upcomingTasks=[
//   {id: 1, title: "Math Homework", status: "Due Date"},
//   {id: 2, title: "Science Project", status: "Due Date"},
//   {id: 3, title: "History Essay", status: "Due Date"},
// ];
//   return (
//     <div className="p-8 min-h-screen">
//       <h1 className="text-3xl font-bold text-indigo-900 mb-6">Welcome!</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
//           <p className="text-2xl font-bold">Total Tasks</p>
//           <p className="text-4xl font-bold">{status.total}</p>
//         </div>
//         <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md">
//           <p className="text-2xl font-bold">Completed</p>
//           <p className="text-4xl font-bold">{status.completed}</p>
//         </div>
//         <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
//           <p className="text-2xl font-bold">Pending</p>
//           <p className="text-4xl font-bold">{status.pending}</p>
//         </div>
//       </div>
//       <div>
//         <h2>Upcoming Tasks</h2>
//       </div>
//     </div>
//   );
// }

// export default Dashboard






import React from "react";
import { Link } from "react-router";

function Dashboard() {
  const status = {
    total: 12,
    completed: 5,
    pending: 7,
  };
  const upcomingTasks = [
    { id: 1, title: "Math Homework", status: "Tomorrow" },
    { id: 2, title: "Science Project", status: "Friday" },
    { id: 3, title: "History Essay", status: "Next Week" },
  ];
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Welcome!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Total Tasks</p>
          <p className="text-4xl font-bold">{status.total}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Completed</p>
          <p className="text-4xl font-bold">{status.completed}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Pending</p>
          <p className="text-4xl font-bold">{status.pending}</p>
        </div>
      </div>
      <div className="shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl">
        <div className="p-6 rounded-2xl border border-gray-200 shadow-md">
          <h2 className="font-bold text-indigo-900 text-2xl mb-4">
            Upcoming Tasks
          </h2>
          <div className="space-y-3">
            
              <div
                
                className=""
              >
                <span className=""></span>
                <span className=""></span>
              </div>
            
          </div>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-indigo-900 text-2xl mb-4">
              Quick Links
            </h2>
            <Link
              to="/tasks-list"
              className="text-blue-500 text-sm cursor-pointer hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            <Link
              to="/add"
              className="w-full bg-blue-700 rounded p-3 flex items-center space-x-3 hover:bg-blue-900 transition shadow-sm text-white font-medium"
            >
              <span className="text-xl">➕</span>
              <span>Add task</span>
            </Link>
            <Link
              to="/tasks-list"
              className="w-full bg-blue-700 rounded p-3 flex items-center space-x-3 hover:bg-blue-900 transition shadow-sm text-white font-medium"
            >
              <span className="text-xl">📋</span>
              <span>Tasks List</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
