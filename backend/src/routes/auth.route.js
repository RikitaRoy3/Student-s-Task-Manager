import express from "express";
import { signup, login, dashboard, taskList, profile,logout } from "../controllers/auth.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";


const router = express.Router();





router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", checkauth, logout);
router.get("/dashboard", checkauth, dashboard);
router.get("/tasklist", checkauth, taskList);
router.get("/profile", checkauth, profile);


export default router;

