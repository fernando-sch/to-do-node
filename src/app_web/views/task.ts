import { Task } from "@/app/entities/task";

export const renderMany = (tasks: Task[]) => tasks.map((task) => render(task));

export const render = (task: Task) => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    is_completed: task.is_completed,
  };
};
