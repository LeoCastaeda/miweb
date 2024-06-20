import { createInterface } from 'readline';
import chalk from 'chalk';
import { addTask, listTasks, completeTask, deleteTask } from './task';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold("🦊🦊🦊🦊🦊 To Do App 🦊🦊🦊🦊🦊"));
  console.log(chalk.blueBright("Menu de Opciones:"));
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Eliminar tarea");
  console.log("5. Salir");
  console.log("\n");
}

function addTaskCLI() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
    addTask(task);
    console.log(chalk.green.bold("Tarea agregada con éxito\n"));
    displayMenu();
    chooseOption();
  });
}

function listTasksCLI() {
  console.log(chalk.yellow.bold("\n🦊🦊🦊🦊🦊 Tareas 🦊🦊🦊🦊🦊\n"));
  const tasks = listTasks();
  if (tasks.length === 0) {
    console.log(chalk.green.bold("No hay tareas por hacer 😀👌🏻\n"));
  } else {
    tasks.forEach(task => {
      const status = task.completed ? "✅" : "❌";
      if (task.completed) {
        console.log(chalk.greenBright(`${task.id}. ${status} - ${task.task}`));
      } else {
        console.log(chalk.redBright(`${task.id}. ${status} - ${task.task}`));
      }
    });
  }
  displayMenu();
  chooseOption();
}

function completeTaskCLI() {
  rl.question(
    chalk.bgMagentaBright("Digita el número de la tarea a completar: "),
    (taskNumber) => {
      const id = parseInt(taskNumber);
      if (completeTask(id)) {
        console.log(chalk.green.bold("Tarea marcada con éxito ✅\n"));
      } else {
        console.log(chalk.red.bold("Número de tarea inválido \n"));
      }
      displayMenu();
      chooseOption();
    }
  );
}

function deleteTaskCLI() {
  rl.question(
    chalk.bgMagentaBright("Digita el número de la tarea a eliminar: "),
    (taskNumber) => {
      const id = parseInt(taskNumber);
      if (deleteTask(id)) {
        console.log(chalk.green.bold("Tarea eliminada con éxito ✅\n"));
      } else {
        console.log(chalk.red.bold("Número de tarea inválido \n"));
      }
      displayMenu();
      chooseOption();
    }
  );
}

function chooseOption() {
  rl.question("Digita el número de tu opción: ", (choice) => {
    switch (choice) {
      case "1":
        addTaskCLI();
        break;
      case "2":
        listTasksCLI();
        break;
      case "3":
        completeTaskCLI();
        break;
      case "4":
        deleteTaskCLI();
        break;
      case "5":
        console.log(chalk.yellow("Adiós 👋🏻🦊"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opción Inválida, Intenta nuevamente \n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();