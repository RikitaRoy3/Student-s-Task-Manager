import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  TaskName: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    trim: true,
  },
  Priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  DueDate:{
    type: Date,
    required: true,
  }

}, { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);

export default Task;

