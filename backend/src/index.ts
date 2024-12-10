import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express()
import { userRouter } from "./routes/userRouter"
app.use(express.json())

app.use('/user', userRouter)

async function connect(){
    if(!process.env.MONGO_URI){
        throw new Error("mongo uri not provided")
    }
    await mongoose.connect(process.env.MONGO_URI);
}
connect()

