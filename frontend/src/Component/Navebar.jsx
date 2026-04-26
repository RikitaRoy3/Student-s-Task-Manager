import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router";
import male_face from "../assets/male_face.png"
import female_face from "../assets/female_face.jpeg"





function Navbar() {

  const API = import.meta.env.VITE_API_URL;



  const location = useLocation();

  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    avatar();
  }, [location]);//Now whenever you navigate: login → dashboard  , signup → dashboard , profile → dashboard . React detects rute change and runs avatar() again.So the correct avatar loads automatically without refreshing.

  /* ===================== connecting Backend's Avatar controller ===================== */

  const avatar = async () => {
    try {
      const res = await fetch(`${API}/api/auth/avatar`, {
        method: "GET",
        credentials: "include",
      });

      const data2 = await res.json();

      setGender(data2.user.gender);
      setProfilePic(data2.user.profilePic);
      console.log("Avatar data:", data2.user.gender);

      if (!res.ok) {
        console.log("Avatar error:", data2.message);
        return;
      }



    } catch (error) {
      console.error("Profile fetch error:", error);
      // toast.error("Failed to load profile data");
    }
  };






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
              <Link to="/profile"><img src={profilePic || (gender === "Male" ? male_face : female_face)} className="mr-3 h-15 rounded-full sm:h-9" alt="profile" /></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

