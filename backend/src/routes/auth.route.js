import express from "express";
import { signup, login, dashboard, taskList } from "../controllers/auth.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";


const router = express.Router();





router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", checkauth, dashboard);
router.get("/task-list", checkauth, taskList);


export default router;

