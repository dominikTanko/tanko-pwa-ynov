import Exemple from "#components/exemple/exemple-model.js";
import Joi from "joi";

export async function index (ctx) {
    try {
        const exemples = await Exemple.find({});
        ctx.ok(exemples);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function id (ctx) {
    try {
        const exemple = await Exemple.findById(ctx.params.id);
        ctx.ok(exemple);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}

export async function create (ctx) {
    try {
        console.log(ctx.request.body);

        const exempleValidationSchema = Joi.object({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            birthdate: Joi.date(),
        });

        const { error, value } = exempleValidationSchema.validate(ctx.request.body);
        if (error) throw new Error(error);
        console.log('No error found continuing the process', value);

        const newExemple = await Exemple.create(value);

        ctx.ok(newExemple);
    } catch (error) {
        ctx.badRequest({ message: error.message });
    }
}
