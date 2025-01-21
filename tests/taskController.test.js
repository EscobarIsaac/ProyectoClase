const { createTask } = require('../src/controllers/taskController');

test('Should create a task', () => {
    const mockTasks = [];
    const req = { body: { title: 'Test Task', description: 'Test Description' } };
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };

    createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ title: 'Test Task' }));
});
