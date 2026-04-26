import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["Male", "Female", "Other"],
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  completedTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }],
  pendingTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }],
  profilePic: {
    type: String,
    default: "",
    trim: true,
  }

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;

