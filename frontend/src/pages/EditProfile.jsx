import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const hasFetched = useRef(false);   // prevent double call (React StrictMode)

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchprofile();
  }, []);

  const fetchprofile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/profile", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to load profile");
        return;
      }

      if (!data.user) {
        toast.error("Invalid response");
        return;
      }

      setFullName(data.user.fullName || "");
      setEmail(data.user.email || "");
      // setPassword(data.user.password || ""); // never prefill password
      setGender(data.user.gender || "");
      setProfilePic(data.user.profilePic || "");

      console.log("Profile data:", data.user);


      toast.success("Profile Data Extracted Successfully");
    } catch (error) {
      console.error("Profile fetch error:", error);
      toast.error("Failed to load profile data");
    }
  };

  const fetcheditprofile = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/editprofile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          fullName,
          email,
          gender,
          password,
          profilePic,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Update failed");
        return;
      }

      fetchprofile();

      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.error("Edit profile error:", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#002D74]">
          Edit Profile
        </h2>

        <p className="text-sm mt-2 text-[#002D74]">
          Edit details and click save
        </p>

        <form className="mt-6" onSubmit={fetcheditprofile}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              placeholder="Enter New Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mt-3">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter New Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mt-3">Password</label>
            <input
              type="password"
              id="password"
              // value={password}
              placeholder="Enter New Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mt-3">Gender</label>
            <select
              id="gender"
              className="w-full border-2 border-gray-400 p-2 rounded mt-2"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select New Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
