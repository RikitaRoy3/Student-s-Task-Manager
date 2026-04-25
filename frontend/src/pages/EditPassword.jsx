import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function EditPassword() {
  let [oldpassword, setoldPassword] = useState("");
  let [newpassword, setNewPassword] = useState("");
  let [confirmnewpassword, setConfirmNewPassword] = useState("");

  /* ===================== connecting Backend's SIGNUP ===================== */
  let pressedRegister = async (event) => {
    event.preventDefault();
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("password:", password);
    console.log("gender:", gender);

    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ fullName, email, password, gender }),
    });

    const data = await res.json();

    if(!res.ok) {
      console.log("Signup error:", data.message);
    }
    else{
      toast.success("Signup Successful");
    }
  };





  return (
    <div className="max-h-screen">
      <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex  flex-row-reverse rounded-2xl shadow-lg max-w-3xl">
          <div className="md:w-1/2 px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Change your Password !</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              Enter your new password ,then press the submit button.
            </p>
            <form className="mt-6" action="#" method="POST">
            


              
              <div className="mt-4">
                <label className="block text-gray-700">Enter the Old Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  onChange={(e) => setoldPassword(e.target.value)}
                />
              </div>

            <div className="mt-4">
                <label className="block text-gray-700">Enter the New Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>


              <button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                      px-4 py-3 mt-6"
                onClick={pressedRegister}
              >
                Signup
              </button>
            </form>

            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>If you have an account...</p>
              <Link
                to="/login"
                className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
              >
                Login
              </Link>
            </div>
          </div>

          <div className="w-1/2 md:block hidden ">
            <img
              src="https://thumbs.dreamstime.com/b/female-student-character-learning-multitasking-switching-different-activities-vector-illustration-young-woman-solving-262606091.jpg"
              className="rounded-2xl h-full"
              alt="page img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditPassword;