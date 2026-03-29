import express from "express";
import { signup, login } from "../controllers/auth.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";
import { dashboard } from "../controllers/auth.controller.js";


const router = express.Router();





router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", checkauth, dashboard);


export default router;

