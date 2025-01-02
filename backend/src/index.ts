import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import userRouter from "./routes/userRouter";
import { courseModel, userModel } from "./database/db";
import { userMiddleware } from "./middleware/userMiddleware";
import { adminMiddleware } from "./middleware/adminMiddleware";
import adminRouter from "./routes/adminRouter";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.post('/signup', async (req, res) => {
    const requiredData = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
        role: z.string().optional(),
    });
    try {
        const { username, email, password, role } = requiredData.parse(req.body);
        const hashedPassword = await bcrypt.hash(password, 2);
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
            role: role || 'student',
        });
        res.json({
            message: "User signed up!",
            user,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Failed to sign up" });
    }
});

app.post('/signin', async (req, res) => {
const JWT_SECRET = "thejwt"
    try {
        const requiredData = z.object({
            email: z.string().email(),
            password: z.string(),
        });
        const { email, password } = requiredData.parse(req.body);
        const user = await userModel.findOne({ email });

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(401).json({ error: "Invalid password" });
            return;
        }
        const payload = {
            userId: user._id,
            role: user.role
        }

        const token = jwt.sign(payload,JWT_SECRET);
        
        res.json({
            message: "User signed in!",
            token
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Failed to sign in" });
    }
});


app.get('/dashboard', userMiddleware, async (req, res) => {
    const user = await userModel.findOne({ _id: req.userId });
    res.json({ user });
});


async function connect() {
    if (!process.env.MONGO_URI) {
        throw new Error("Mongo URI not provided");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected successfully");
}

connect();
app.listen(3000, () => console.log("Server running on port 3000"));
