import mongoose from "mongoose";

const { Schema } = mongoose;

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: 'List',
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Tasks = mongoose.model('Tasks', tasksSchema);

export default Tasks;