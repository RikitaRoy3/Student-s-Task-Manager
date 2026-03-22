import express from "express";
import { new_task} from "../controllers/task.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/new_task", checkauth, new_task);

export default router;