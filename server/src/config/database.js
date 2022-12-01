import { mongoose } from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ant6bun.mongodb.net/test`)
    .then(() => console.log('Successfully connected to database'))
    .catch((err) => console.log(`Error during connection to database: ${err}`));