import React from 'react'

function Add() {
  return (
    <div className="mx-8 max-w-full">
      <h2 className="text-blue-900 text-2xl font-bold pt-5 pb-4">
        Add New Task
      </h2>
      <hr className="bg-gray-900 h-[2px]" />
      <form>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Task Title*</label>
          <input
            type="text"
            placeholder="Enter title"
            className="border-2 border-gray-400 p-2 w-full rounded focus:outline-none"
            required
          />
        </div>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Description*</label>
          <textarea
            className="w-full p-2 border-2 border-gray-400 rounded focus:outline-none"
            rows={3}
            required
          />
        </div>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Due Date*</label>
          <input
            type="date"
            className="border-2 border-gray-400 p-2 w-50 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mt-3">
          <label className="font-bold text-lg block mb-2">Priority*</label>
          <select className="border-2 border-gray-400 p-2 w-50 rounded focus:outline-none">
            <option value={"High"}>High</option>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
          </select>
        </div>
        <hr className="bg-gray-900 h-[2px] mt-8" />
        <button className="mt-5 bg-blue-900 text-white font-bold px-10 py-3 flex rounded hover:bg-blue-700">
          Save Task
        </button>
      </form>
    </div>
  );
}

export default Add