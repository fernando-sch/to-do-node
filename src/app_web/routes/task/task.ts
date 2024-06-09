import { Router } from "express";
import { TaskController } from "@/app_web/controllers/task";

export const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.post("/", taskController.create);
taskRoutes.get("/", taskController.list);
