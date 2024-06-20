import { addTask, listTasks, completeTask, deleteTask } from '../src/task';

describe('Task functions', () => {
  test('should add a task', () => {
    const task = addTask('Test task');
    expect(task).toEqual({ id: 1, task: 'Test task', completed: false });
  });

  test('should list tasks', () => {
    addTask('Task 1');
    addTask('Task 2');
    const tasks = listTasks();
    expect(tasks.length).toBe(3);
  });

  test('should complete a task', () => {
    const result = completeTask(1);
    expect(result).toBe(true);
    const tasks = listTasks();
    expect(tasks[0].completed).toBe(true);
  });

  test('should delete a task', () => {
    const result = deleteTask(1);
    expect(result).toBe(true);
    const tasks = listTasks();
    expect(tasks.length).toBe(2);
  });
});