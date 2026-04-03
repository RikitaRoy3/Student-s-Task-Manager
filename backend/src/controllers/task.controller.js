import Task from "../models/Task.js";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();


/* ===================== NEW TASK ===================== */
export const new_task = async (req, res) => {
  try {
    const { TaskTitle, Description, Priority, DueDate } = req.body;

    if (!TaskTitle || !Description || !Priority || !DueDate) {
      return res.status(400).json({ message: "Please provide all the required fields" });
    }

    const new_task = await Task.create({
      TaskTitle,
      Description,
      Priority,
      DueDate,
      user: req.user._id
    });

    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { pendingTasks: new_task._id } }
    );

    res.status(201).json({
      user: {
        message: "New Task registered successfully",
        Task_Id: new_task._id,
        TaskTitle: new_task.TaskTitle,
        Description: new_task.Description,
        Priority: new_task.Priority,
        DueDate: new_task.DueDate,
        User_Id: new_task.user
      },
    });

  }
  catch (error) {
    console.error("Error in new_task controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}




/* ===================== PENDING TASK to COMPLETED TASK ===================== */

export const pending_to_completed = async (req, res) => {
  try {
    const { Task_Id } = req.body;

    const task = await Task.findById(Task_Id);
    
    if (!task) {
      return res.status(400).json({ message: "Task not found" });
    }

    req.user.completedTasks.push(task._id);
    await task.save();

    req.user.pendingTasks.pull(task._id);
    await req.user.save();

    res.status(201).json({
      task: {
        message: "Task completed successfully",
        Task_Id: task._id,
        TaskTitle: task.TaskTitle,
        Description: task.Description,
        Priority: task.Priority,
        DueDate: task.DueDate,
        User_Id: task.user
      },
    });
  }
  catch (error) {
    console.error("Error in pending_to_completed controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
