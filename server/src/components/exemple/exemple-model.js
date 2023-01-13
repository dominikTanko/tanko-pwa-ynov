import mongoose from "mongoose";

const { Schema } = mongoose;

const exempleSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})

const Exemple = mongoose.model('Exemple', exempleSchema);

Exemple.create({ firstname: "Joe", lastname: "Biden", birthdate: new Date() });

export default Exemple;