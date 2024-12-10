import mongoose, { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    role: String,
    password: { type:String, required:true },
    created_at: {type: Date, default: Date.now}
    
})
const courseSchema = new Schema({
    title: { type: String, required: true }, 
    description: String,
    price: Number,
    thumbnail_url: String,
    instructor_id: String,
    purchased: Boolean,
    created_at: {type: Date, default: Date.now}
}, { _id: false });


const purchaseSchema  = new Schema({
    userId: { ref:'User', type:Types.ObjectId },
    courseId: { ref:"Course", type:Types.ObjectId},
    timestamp: {type: Date, default: Date.now}
})

const paymentSchema = new Schema({
    userId: { ref:'User', type:Types.ObjectId },
    courseId: { ref:"Course", type:Types.ObjectId},
    timestamp: {type: Date, default: Date.now},
    amount: Number,
    status: String
})

const userModel = model('User', userSchema)
const courseModel = model('Course', courseSchema)
const purchaseModel = model('Purchase', purchaseSchema)
const paymentModel = model('Payment', paymentSchema)

export { userModel, courseModel, purchaseModel, paymentModel }