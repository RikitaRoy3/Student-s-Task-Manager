// import React from 'react'

// function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile





import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import male_face from "../assets/male_face.png";
import female_face from "../assets/female_face.jpeg";

const Profile = () => {



  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [gender, setGender] = useState("");


  useEffect(() => {
    fetchprofile();
    avatar();
  }, []);

  /* ===================== connecting Backend's Profile details fetching controller ===================== */
  const fetchprofile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/profile", {
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


      console.log("Profile data:", data.user);

    } catch (error) {
      console.error("Profile fetch error:", error);
      toast.error("Failed to load profile data");
    }
  };

  /* ===================== connecting Backend's Logout controller ===================== */
  const function_to_logout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {

        toast.success("Logged out successfully");
        return;
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  /* ===================== connecting Backend's Avatar controller ===================== */

  const avatar = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/avatar", {
        method: "GET",
        credentials: "include",
      });

      const data2 = await res.json();

      setGender(data2.user.gender);
      console.log("Avatar data:", data2.user.gender);

      if (res.ok) {
        toast.success("Avatar loaded successfully");
      } else {
        toast.error(data2.message);
        return;
      }



    } catch (error) {
      console.error("Profile fetch error:", error);
      toast.error("Failed to load profile data");
    }
  };


  // const user = {
  //   name: {fullName},
  //   email: {email},
  // };
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-700 p-6 text-white text-center">
          <h1 className="text-xl font-bold">Profile & Settings</h1>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-gray-100">
            <img
              src={gender === "Male" ? male_face : female_face}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-blue-50 object-cover"
            />
            <span>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {fullName}
                </h2>

                <p className="text-gray-500">{email}</p>
                {/* <div className="mt-2 inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Major: {user.major}
                </div> */}

              </div>
            </span>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition" onClick={(e) => {
              e.target.disabled = true; // Disable the button to prevent multiple clicks
              function_to_logout();
            }}>
              Logout
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition border border-transparent hover:border-gray-200 group">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">✏️</span>
                <span className="font-semibold text-gray-700">
                  Edit Profile
                </span>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600">
                →
              </span>
            </button>

            <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition border border-transparent hover:border-gray-200 group">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">🔒</span>
                <span className="font-semibold text-gray-700">
                  Change Password
                </span>
              </div>
              <span className="text-gray-400 group-hover:text-blue-600">
                →
              </span>
            </button>
          </div>
          <div className="bg-white p-6 ">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
              Notifications
            </h3>

            <div className="space-y-4">

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700 font-medium hover:text-blue-600 transition">
                  Email Alerts
                </span>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={() => setEmailAlerts(!emailAlerts)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer ">
                <span className="text-gray-700 font-medium hover:text-blue-600 transition">
                  Push Notifications
                </span>
                <input
                  type="checkbox"
                  checked={pushNotifs}
                  onChange={() => setPushNotifs(!pushNotifs)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
