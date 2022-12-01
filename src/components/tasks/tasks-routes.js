import Router from '@koa/router';
import * as tasksControllers from '#components/tasks/tasks-controller.js';

const tasks = new Router();

tasks.get('/', tasksControllers.index);
tasks.get('/:id', tasksControllers.id);
tasks.post('/', tasksControllers.create);
tasks.put('/:id', tasksControllers.update);
tasks.del('/:id', tasksControllers.deleteTask);

export default tasks;