import { InsertResult } from "typeorm";
import { AppDataSource } from "@/config";
import { Task } from "@/app/entities/task";

type TaskParams = {
  title: string;
  description: string | null;
};

export class TaskRepository {
  repository = AppDataSource.getRepository(Task);

  create(params: TaskParams): Promise<InsertResult> {
    const taskEntity = this.repository.manager.create(Task, params);
    return this.repository.insert(taskEntity);
  }
}
