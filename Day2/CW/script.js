const fs = require('fs');
const path = require('path');
const readline = require('readline');

// File to store tasks
const tasksFile = path.join(__dirname, 'tasks.json');

// Create tasks file if it doesn't exist
if (!fs.existsSync(tasksFile)) {
  fs.writeFileSync(tasksFile, JSON.stringify([]));
}

// Read tasks from file
const readTasks = () => {
  const data = fs.readFileSync(tasksFile, 'utf-8');
  return JSON.parse(data);
};

// Write tasks to file
const writeTasks = (tasks) => {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
};

// Display tasks
const viewTasks = () => {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? '✔' : ' '}] ${task.name}`);
    });
  }
};

// Add a task
const addTask = (taskName) => {
  const tasks = readTasks();
  tasks.push({ name: taskName, completed: false });
  writeTasks(tasks);
  console.log('Task added.');
};

// Mark a task as complete
const completeTask = (taskIndex) => {
  const tasks = readTasks();
  if (taskIndex < 1 || taskIndex > tasks.length) {
    console.log('Invalid task number.');
    return;
  }
  tasks[taskIndex - 1].completed = true;
  writeTasks(tasks);
  console.log('Task marked as complete.');
};

// Remove a task
const removeTask = (taskIndex) => {
  const tasks = readTasks();
  if (taskIndex < 1 || taskIndex > tasks.length) {
    console.log('Invalid task number.');
    return;
  }
  tasks.splice(taskIndex - 1, 1);
  writeTasks(tasks);
  console.log('Task removed.');
};

// Command Line Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log('\nTask Manager');
  console.log('1. View tasks');
  console.log('2. Add a new task');
  console.log('3. Mark a task as complete');
  console.log('4. Remove a task');
  console.log('5. Exit');
};

const handleInput = (choice) => {
  switch (choice.trim()) {
    case '1':
      viewTasks();
      promptUser();
      break;
    case '2': 
      rl.question('Enter the task name: ', (taskName) => {
        addTask(taskName);
        promptUser();
      });
      break;
    case '3':
      rl.question('Enter the task number to mark as complete: ', (taskNum) => {
        completeTask(parseInt(taskNum));
        promptUser();
      });
      break;
    case '4':
      rl.question('Enter the task number to remove: ', (taskNum) => {
        removeTask(parseInt(taskNum));
        promptUser();
      });
      break;
    case '5':
      console.log('Goodbye!');
      rl.close();
      break;  
    default:
      console.log('Invalid choice. Please select a valid option.');
      promptUser();
  }
};

const promptUser = () => {
  showMenu();
  rl.question('Select an option: ', handleInput);
};

// Start the program
promptUser();
