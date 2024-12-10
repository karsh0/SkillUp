import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
})
const courseItemSchema = new Schema({
    name: { type: String, required: true }, 
    description: String,
    duration: Number, 
    isCompleted: { type: Boolean, default: false },
}, { _id: false });


const courseSchema  = new Schema({
    userId: { ref:'User', type: mongoose.Types.ObjectId },
    courses: { type: [courseItemSchema], default: []},
    timeStamp: {type: Date, default: Date.now},
})

const userModel = model('User', userSchema)
const courseModel = model('Course', courseSchema)

module.exports = { userModel, courseModel}