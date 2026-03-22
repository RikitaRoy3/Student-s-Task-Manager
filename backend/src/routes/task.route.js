import express from "express";
import { new_task} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/new_task", new_task);

export default router;