const taskService = require('../data/taskService');

function getAllTasks(req, res) {
  const tasks = taskService.getAllTasks();
  res.status(200).json(tasks);
}

function getTaskById(req, res) {
  const task = taskService.getTaskById(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
}

function createTask(req, res) {
  const { title, description, dueDate, status } = req.body;
  if (!title || !description || !dueDate || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newTask = taskService.createTask(title, description, dueDate, status);
  res.status(201).json(newTask);
}

function updateTask(req, res) {
  const { title, description, dueDate, status } = req.body;
  const updatedTask = taskService.updateTask(req.params.id, title, description, dueDate, status);
  if (updatedTask) {
    res.status(200).json(updatedTask);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
}

function deleteTask(req, res) {
  const success = taskService.deleteTask(req.params.id);
  if (success) {
    res.status(204).send(); 
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};