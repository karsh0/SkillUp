import { model, Schema, Types } from "mongoose";

enum userRole{
    ADMIN = "Admin",
    STUDENT = "Student"
}

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    role: {type: String, enum: Object.values(userRole) ,default: userRole.STUDENT},
    password: { type:String, required:true },
    created_at: {type: Date, default: Date.now}
})
const courseSchema = new Schema({
    title: { type: String, required: true }, 
    description: String,
    price: Number,
    thumbnail_url: String,
    instructor_id: {type: Types.ObjectId},
    purchased: Boolean,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
});


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