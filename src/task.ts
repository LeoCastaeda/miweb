export interface Task {
    id: number;
    task: string;
    completed: boolean;
  }
  
  let tasks: Task[] = [];
  let currentId = 1;
  
  export function addTask(task: string): Task {
    const newTask: Task = { id: currentId++, task, completed: false };
    tasks.push(newTask);
    return newTask;
  }
  
  export function listTasks(): Task[] {
    return tasks;
  }
  
  export function completeTask(id: number): boolean {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  }
  
  export function deleteTask(id: number): boolean {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    }
    return false;
  }