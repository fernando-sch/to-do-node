import { InsertResult, Repository } from "typeorm";
import { BaseRepository } from "@/app/repositories/base";
import { Task } from "@/app/entities/task";

type CreateParams = {
  title: string;
  description: string | null;
};

export class TaskRepository extends BaseRepository<Task> {
  private repository: Repository<Task> = this.getRepository();

  constructor() {
    super(new Task());
  }

  create(params: CreateParams): Promise<InsertResult> {
    const taskEntity = this.repository.manager.create(Task, params);

    return this.repository.insert(taskEntity);
  }

  list(): Promise<Task[]> {
    return this.repository.find();
  }
}
