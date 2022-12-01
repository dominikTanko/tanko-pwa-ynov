import Router from '@koa/router';
import * as exempleControllers from '#components/exemple/exemple-controller.js';

const exemples = new Router();

exemples.get('/', exempleControllers.index);
exemples.get('/:id', exempleControllers.id);
exemples.post('/', exempleControllers.create);

// exemples.get('/', (ctx, next) => {
//     console.log(ctx);
//     ctx.body = "Hello";
//     ctx.ok({ id: 123, name: 'Dat Boi' });
//     ctx.badRequest({ message: "Erreur" });
// })

// exemples.post('/');
// exemples.put('/:id');
// exemples.del('/:id');

export default exemples;