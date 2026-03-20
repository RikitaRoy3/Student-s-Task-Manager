import express from "express";
import { signup} from "../controllers/auth.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";


const router = express.Router();





router.post("/signup", signup);


export default router;

