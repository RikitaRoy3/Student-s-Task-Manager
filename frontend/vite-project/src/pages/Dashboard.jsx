// // import React from 'react'

// // function Dashboard() {
// //   const status={
// //     total: 12,
// //     completed: 5,
// //     pending:7
// //   };
// //   const upcomingTasks=[
// //   {id: 1, title: "Math Homework", status: "Due Date"},
// //   {id: 2, title: "Science Project", status: "Due Date"},
// //   {id: 3, title: "History Essay", status: "Due Date"},
// // ];
// //   return (
// //     <div className="p-8 min-h-screen">
// //       <h1 className="text-3xl font-bold text-indigo-900 mb-6">Welcome!</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //         <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
// //           <p className="text-2xl font-bold">Total Tasks</p>
// //           <p className="text-4xl font-bold">{status.total}</p>
// //         </div>
// //         <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md">
// //           <p className="text-2xl font-bold">Completed</p>
// //           <p className="text-4xl font-bold">{status.completed}</p>
// //         </div>
// //         <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
// //           <p className="text-2xl font-bold">Pending</p>
// //           <p className="text-4xl font-bold">{status.pending}</p>
// //         </div>
// //       </div>
// //       <div>
// //         <h2>Upcoming Tasks</h2>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard






// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router";
// import { toast } from "react-toastify";

// function Dashboard() {

//   /* ===================== connecting Backend's DASHBOARD ===================== */

// const hasFetched = useRef(false);

// useEffect(() => {
//   if (!hasFetched.current) {
//     pressedRegister();
//     hasFetched.current = true;
//   }
// }, []);// This ensures that pressedRegister is called only once when the component mounts (In case of multiple renders due to state changes, it won't call pressedRegister again).On top of that we were using strictmode which calls useEffect 2 time...one when component mounts , 2nd the component unmounts,then when component again mounts it calls useEffect again...so to avoid that we used useRef to track if we have already fetched the data or not.

//   let [fullName, setFullName] = useState("");
//   let [email, setEmail] = useState("");
//   let [profilePic, setProfilePic] = useState("");
//   let [completedTasks, setCompletedTasks] = useState([]);
//   let [pendingTasks, setPendingTasks] = useState([]);


// const status = {
//   total: (pendingTasks?.length || 0) + (completedTasks?.length || 0),
//   completed: completedTasks?.length || 0,
//   pending: pendingTasks?.length || 0,
// };
//   const upcomingTasks = [
//     { id: 1, title: "Math Homework", status: "Tomorrow" },
//     { id: 2, title: "Science Project", status: "Friday" },
//     { id: 3, title: "History Essay", status: "Next Week" },
//   ];

//   /* ===================== connecting Backend's SIGNUP ===================== */
//   let pressedRegister = async (event) => {

//     const res = await fetch("http://localhost:3000/api/auth/dashboard", {
//       method: "GET",
//       credentials: "include",
//     });

//     const data = await res.json();

//     // res.ok
//     //   ? toast.success("successful !! ")
//     //   : toast.error(data.message);

//       setFullName(data.user.fullName);
//       setEmail(data.user.email);
//       setProfilePic(data.user.profilePic);
//       setCompletedTasks(data.user.completedTasks);
//       setPendingTasks(data.user.pendingTasks);

//     console.log("fullName:", data.user.fullName);
//     console.log("email:", data.user.email);
//     console.log("profilePic:", data.user.profilePic);
//     console.log("completedTasks:", data.user.completedTasks);
//     console.log("pendingTasks:", data.user.pendingTasks);
//   };



//   return (
//     <div className="p-8 min-h-screen">
//       <h1 className="text-3xl font-bold text-indigo-900 mb-6">Welcome {fullName}!</h1>
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
//       <div className="shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl">
//         <div className="p-6 rounded-2xl border border-gray-200 shadow-md">
//           <h2 className="font-bold text-indigo-900 text-2xl mb-4">
//             Upcoming Tasks
//           </h2>
//           <div className="space-y-3">

//             <div

//               className=""
//             >
//               <span className=""></span>
//               <span className=""></span>
//             </div>

//           </div>
//         </div>
//         <div className="p-6 rounded-2xl border border-gray-200 shadow-md">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="font-bold text-indigo-900 text-2xl mb-4">
//               Quick Links
//             </h2>
//             <Link
//               to="/tasks-list"
//               className="text-blue-500 text-sm cursor-pointer hover:underline"
//             >
//               View All
//             </Link>
//           </div>
//           <div className="space-y-4">
//             <Link
//               to="/add"
//               className="w-full bg-blue-700 rounded p-3 flex items-center space-x-3 hover:bg-blue-900 transition shadow-sm text-white font-medium"
//             >
//               <span className="text-xl">➕</span>
//               <span>Add task</span>
//             </Link>
//             <Link
//               to="/tasks-list"
//               className="w-full bg-blue-700 rounded p-3 flex items-center space-x-3 hover:bg-blue-900 transition shadow-sm text-white font-medium"
//             >
//               <span className="text-xl">📋</span>
//               <span>Tasks List</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function Dashboard() {

  /* ===================== STATE ===================== */

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  /* ===================== FETCH DASHBOARD DATA ===================== */

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/dashboard", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      setFullName(data.user.fullName || "");
      setEmail(data.user.email || "");
      setProfilePic(data.user.profilePic || "");

      // setCompletedTasks(
      //   Array.isArray(data.user.completedTasks)
      //     ? data.user.completedTasks
      //     : data.user.completedTasks
      //       ? [data.user.completedTasks]
      //       : []
      // );

      // setPendingTasks(
      //   Array.isArray(data.user.pendingTasks)
      //     ? data.user.pendingTasks
      //     : data.user.pendingTasks
      //       ? [data.user.pendingTasks]
      //       : []
      // );
      setCompletedTasks(data.user.completedTasks);
      setPendingTasks(data.user.pendingTasks);

      console.log("Dashboard data:", data.user);

    } catch (error) {
      console.error("Dashboard fetch error:", error);
      toast.error("Failed to load dashboard");
    }
  };

  /* ===================== TASK STATUS ===================== */

  const totalTasks =
    (pendingTasks?.length || 0) + (completedTasks?.length || 0);

  const completedCount = completedTasks?.length || 0;
  const pendingCount = pendingTasks?.length || 0;

  /* ===================== UI ===================== */

  return (
    <div className="p-8 min-h-screen">

      <h1 className="text-3xl font-bold text-indigo-900 mb-6">
        Welcome {fullName}!
      </h1>

      {/* ===== DASHBOARD STATS ===== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Total Tasks</p>
          <p className="text-4xl font-bold">{totalTasks}</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Completed</p>
          <p className="text-4xl font-bold">{completedCount}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Pending</p>
          <p className="text-4xl font-bold">{pendingCount}</p>
        </div>

      </div>

      {/* ===== LOWER SECTION ===== */}

      <div className="shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl">

        {/* Upcoming Tasks */}

        <div className="p-6 rounded-2xl border border-gray-200 shadow-md">
          <h2 className="font-bold text-indigo-900 text-2xl mb-4">
            Upcoming Tasks
          </h2>

          <div className="space-y-3 text-gray-500">
            {pendingTasks.length === 0 && (
              <p>No upcoming tasks</p>
            )}
          </div>

        </div>

        {/* Quick Links */}

        <div className="p-6 rounded-2xl border border-gray-200 shadow-md">

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-indigo-900 text-2xl">
              Quick Links
            </h2>

            <Link
              to="/tasks-list"
              className="text-blue-500 text-sm hover:underline"
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
              <span>Add Task</span>
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