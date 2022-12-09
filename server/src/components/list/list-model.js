import mongoose from "mongoose";

const { Schema } = mongoose;

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    favourite: {
        type: Boolean,
        default: false
    }
    // tasks: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Tasks',
    // }]
}, {
    timestamps: true
})

const List = mongoose.model('List', listSchema);

export default List;