import { Request, Response } from "express";
import { TaskRepository } from "@/app/repositories/task";

export class TaskController {
  private repository: TaskRepository = new TaskRepository();

  async create(req: Request, res: Response) {
    try {
      const invalidTitleField = !req.body.title;

      if (invalidTitleField) {
        return res
          .status(422)
          .json({ status: "failed", message: "title field is required" });
      }

      const taskParams = {
        title: req.body.title,
        description: req.body.description ?? null,
      };

      const insertedTask = await this.repository.create(taskParams);

      const wasNotInserted = insertedTask.generatedMaps.length === 0;

      if (wasNotInserted) {
        return res
          .status(422)
          .json({ status: "failed", message: "not created" });
      }

      return res.status(201).json({ status: "ok", message: "created" });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "internal_server_error",
        errors: error,
      });
    }
  }
}
