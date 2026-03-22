import React from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";


function Add() {

  let [TaskTitle, setTaskTitle] = useState("");
  let [Description, setDescription] = useState("");
  let [Priority, setPriority] = useState("");
  let [DueDate, setDueDate] = useState("");


  /* ===================== connecting Add Task's Backend ===================== */
  let pressedRegister = async (event) => {
    event.preventDefault();
    console.log("TaskTitle:", TaskTitle);
    console.log("Description:", Description);
    console.log("Priority:", Priority);
    console.log("DueDate:", DueDate);

    const res = await fetch("http://localhost:3000/api/task/new_task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ TaskTitle, Description, Priority, DueDate }),
    });

    const data = await res.json();

    res.ok
      ? toast.success("New Task added successfully")
      : toast.error(data.message);
  };






  return (
    <div className="mx-8 max-w-full">
      <h2 className="text-blue-900 text-2xl font-bold pt-5 pb-4">
        Add New Task
      </h2>
      <hr className="bg-gray-900 h-[2px]" />
      <form>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">TaskTitle*</label>
          <input
            type="text"
            placeholder="Enter Task Title"
            className="border-2 border-gray-400 p-2 w-full rounded focus:outline-none"
            required onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Description*</label>
          <textarea
            className="w-full p-2 border-2 border-gray-400 rounded focus:outline-none"
            rows={3}
            placeholder="Enter Task Description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Due Date*</label>
          <input
            type="date"
            className="border-2 border-gray-400 p-2 w-50 rounded focus:outline-none"
            required onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Priority*</label>
          <select className="border-2 border-gray-400 p-2 w-50 rounded focus:outline-none" value={Priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="" disabled>
              Select Priority
            </option>
            <option value={"High"}>High</option>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
          </select>
        </div>
        <hr className="bg-gray-900 h-[2px] mt-8" />
        <button type="submit" className="mt-5 bg-blue-900 text-white font-bold px-10 py-3 flex rounded hover:bg-blue-700" onClick={pressedRegister}>
          Save Task
        </button>
      </form>
    </div>
  );
}

export default Add