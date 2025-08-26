const Task = require('../models/task');

let tasks = []; 
let nextId = 1; 

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find(task => task.id === parseInt(id));
}

function createTask(title, description, dueDate, status) {
  const newTask = new Task(nextId++, title, description, dueDate, status);
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, title, description, dueDate, status) {
  const task = getTaskById(id);
  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.status = status || task.status;
    return task;
  }
  return null;
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};