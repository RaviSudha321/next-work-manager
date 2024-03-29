import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    about: {
        type: String,
        required: [true, "about is required"],
    },
});

export const userModel = mongoose.models.users || mongoose.model('users', userSchema);