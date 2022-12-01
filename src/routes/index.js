import Router from "@koa/router";
import exempleRoutes from "#components/exemple/exemple-routes.js";
import tasksRoutes from "#components/tasks/tasks-routes.js";

const API_V1_ROUTER = new Router({ prefix: '/api/v1' });

API_V1_ROUTER
    .use('/exemples', exempleRoutes.routes(), exempleRoutes.allowedMethods())
    .use('/tasks', tasksRoutes.routes(), tasksRoutes.allowedMethods());

export { API_V1_ROUTER }