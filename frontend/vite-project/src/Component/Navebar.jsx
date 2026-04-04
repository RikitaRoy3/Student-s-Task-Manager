// import React from "react";
// import logo from "../assets/logo.jpg";
// import { Link } from "react-router";

// function Navbar() {
//   return (
//     <header>
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-linear-to-r from-cyan-300 from-sky-700 to-blue-900">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <span className="flex items-center">
//             <img
//               src={logo}
//               className="mr-3 h-15 rounded-full sm:h-9"
//               alt="student task manager"
//             />
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               Student Task Manager
//             </span>
//           </span>
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="/login"
//               className="text-gray-800 dark:text-white hover:bg-gray-50  focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Log in
//             </Link>
//             <Link
//               to="/signup"
//               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Signup
//             </Link>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <Link
//                   to="/"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-black font-bold dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                   aria-current="page"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-black font-bold dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/calender"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-black font-bold dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Calender
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/add"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-black font-bold dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Add new task
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;




import React from "react";
import logo from "../assets/logo.jpg";
import profile from "../auth/Profile.jsx"
import { Link } from "react-router";
import male_face from "../assets/male_face.png"


function Navbar() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-linear-to-r from-cyan-300 from-sky-700 to-blue-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-15 rounded-full sm:h-9"
              alt="student task manager"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Student Task Manager
            </span>
          </span>
          <div className="flex items-center gap-8 lg:order-2">
            <div>
              <Link
                to="/dashboard"
                className="text-gray-800 border border-white dark:text-white hover:bg-gray-50  focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Dashboard
              </Link>

              <Link
                to="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50  focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Signup
              </Link>
            </div>
            <div>
             <Link to="/profile"><img src={male_face} className="mr-3 h-15 rounded-full sm:h-9" alt="profile"/></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

