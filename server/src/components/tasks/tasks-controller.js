import Tasks from "#components/tasks/tasks-model.js";
import Joi from "joi";

export async function index (ctx) {
    try {
        const tasks = await Tasks.find({});
        ctx.ok(tasks);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function id (ctx) {
    try {
        if (ctx.params.id.length <= 0) return ctx.notFound({ message: 'ID missing' })
        const tasks = await Tasks.findById(ctx.params.id);
        ctx.ok(tasks);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function create (ctx) {
    try {
        console.log(ctx.request.body);

        const tasksValidationSchema = Joi.object({
            description: Joi.string().required(),
            title: Joi.string().required(),
            list: Joi.string().required(),
            done: Joi.boolean()
        });

        const { error, value } = tasksValidationSchema.validate(ctx.request.body);
        if (error) throw new Error(error);
        console.log('No error found, continuing the process', value);

        const newTask = await Tasks.create(value);
        ctx.ok(newTask);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}


export async function update (ctx) {
    try {
        console.log(ctx.request.body);

        const tasksValidationSchema = Joi.object({
            description: Joi.string(),
            title: Joi.string(),
            list: Joi.string(),
            done: Joi.boolean()
        });

        const { error, value } = tasksValidationSchema.validate(ctx.request.body);
        if (error) throw new Error(error);
        console.log('No error found, continuing the process', value);

        const newTask = await Tasks.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true });

        ctx.ok(newTask);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function deleteTask (ctx) {
    try {
        if (ctx.params.id.length <= 0) return ctx.notFound({ message: 'ID missing' })
        const task = await Tasks.findByIdAndDelete(ctx.params.id);
        ctx.ok(task);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}