import express from "express";
import { new_task, pending_to_completed, completed_to_pending, delete_task } from "../controllers/task.controller.js";
import { checkauth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/new_task", checkauth, new_task);
router.put("/pending_to_completed", checkauth, pending_to_completed);
router.put("/completed_to_pending", checkauth, completed_to_pending);
router.put("/delete_task", checkauth, delete_task);

export default router;