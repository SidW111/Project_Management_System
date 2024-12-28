import { Router } from "express";
import { createTask, getTasks, getUserTask, updateTaskStatus } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/",createTask)
router.patch("/:taskId/status", updateTaskStatus)
router.get("/user/:userId", getUserTask)


export default router