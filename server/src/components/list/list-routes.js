import Router from '@koa/router';
import * as listControllers from '#components/list/list-controller.js';

const list = new Router();

list.get('/', listControllers.index);
list.get('/:id', listControllers.id);
list.post('/', listControllers.create);
list.put('/:id', listControllers.update);
list.del('/:id', listControllers.deleteList);

export default list;