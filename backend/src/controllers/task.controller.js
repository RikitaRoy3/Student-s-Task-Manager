import Task from "../models/Task.js";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

import dotenv from "dotenv";
dotenv.config();

export const new_task = async (req, res) => {
  const { TaskTitle, Description, Priority, DueDate } = req.body;


  try {
    const  userId  = req.params.userId;

    if (!TaskTitle || !Description || !Priority || !DueDate) {
      return res.status(400).json({ message: "Please provide all the required fields" });
    }

    const existingUser = await User.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const new_task = await Task.create({
      TaskTitle,
      Description,
      Priority,
      DueDate,
      user: userId
    });

    res.status(201).json({
      user: {
        message: "New Task registered successfully",
        _id: new_task._id,
        TaskTitle: new_task.TaskTitle,
        Description: new_task.Description,
        Priority: new_task.Priority,
        DueDate: new_task.DueDate,
        user: new_task.user
      },
    });
    
  }
    catch (error) {
      console.error("Error in new_task controller:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}