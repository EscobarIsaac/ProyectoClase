const tasks = require('../models/task');

let id = 1;

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    const task = { id: id++, title, description, completed: false };
    tasks.push(task);
    res.status(201).json(task);
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ message: 'Task not found' });

    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'Task not found' });

    tasks.splice(index, 1);
    res.status(204).send();
};
