import { Router } from "express";
import { taskRoutes } from "@/app_web/routes/task";

export const routes = Router();

routes.use(taskRoutes);
