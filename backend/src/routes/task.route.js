import express from "express";
import { new_task, pending_to_completed } from "../controllers/task.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/new_task", checkauth, new_task);
router.put("/pending_to_completed", checkauth, pending_to_completed);

export default router;