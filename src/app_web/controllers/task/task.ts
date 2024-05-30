import { Request, Response } from "express";
import { TaskRepository } from "@/app/repositories/task";

export class TaskController {
  repository = new TaskRepository();

  async create(req: Request, res: Response) {
    const invalidTitleField = !req.body.title;

    if (invalidTitleField) {
      return res.status(422).json({ error: "Title field is required" });
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
        .json({ error: "Something when wrong, try again later" });
    }

    return res.status(201).json({ info: "Task created" });
  }
}
