import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express()
import  userRouter  from "./routes/userRouter"
import  adminRouter  from "./routes/adminRouter"
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/user', userRouter)
app.use('/admin', adminRouter)

async function connect(){
    if(!process.env.MONGO_URI){
        throw new Error("mongo uri not provided")
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully")
}
connect()

app.listen(3000)

