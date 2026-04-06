import express from "express";
import { signup, login, dashboard, taskList, profile,logout, avatar } from "../controllers/auth.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";


const router = express.Router();





router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", checkauth, logout);
router.get("/dashboard", checkauth, dashboard);
router.get("/tasklist", checkauth, taskList);
router.get("/profile", checkauth, profile);
router.get("/avatar", checkauth, avatar);


export default router;

