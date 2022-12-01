import List from "#components/list/list-model.js";
import Joi from "joi";

export async function index (ctx) {
    try {
        const list = await List.find({});
        ctx.ok(list);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function id (ctx) {
    try {
        if (ctx.params.id.length <= 0) return ctx.notFound({ message: 'ID missing' })
        const list = await List.findById(ctx.params.id);
        ctx.ok(list);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function create (ctx) {
    try {
        console.log(ctx.request.body);

        const listValidationSchema = Joi.object({
            description: Joi.string().required(),
            title: Joi.string().required()
        });

        const { error, value } = listValidationSchema.validate(ctx.request.body);
        if (error) throw new Error(error);
        console.log('No error found, continuing the process', value);

        const newList = await List.create(value);
        ctx.ok(newList);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}


export async function update (ctx) {
    try {
        console.log(ctx.request.body);

        const listValidationSchema = Joi.object({
            description: Joi.string(),
            title: Joi.string(),
            done: Joi.boolean()
        });

        const { error, value } = listValidationSchema.validate(ctx.request.body);
        if (error) throw new Error(error);
        console.log('No error found, continuing the process', value);

        // Option 1
        // const newList = await List.findById(ctx.params.value);
        // newList.set(value);
        // await newList.save();
        
        // Option 2
        const newList = await List.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true });

        ctx.ok(newList);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function deleteList (ctx) {
    try {
        const list = await List.findByIdAndDelete({});
        ctx.ok(list);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}