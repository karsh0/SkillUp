import { Router } from "express";
import { Request, Response } from "express";
import { z } from "zod"
import { userModel } from "../database/db";
import  bcrypt  from "bcrypt"
import { userMiddleware } from "../middleware/userMiddleware";
import jwt from "jsonwebtoken";

require("dotenv").config()

const userRouter = Router()

userRouter.post('/signup', async (req,res) =>{
    const requiredData = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
        name: z.string(),
        role: z.string().optional()
    })
    try{
        const {username, email, password, name, role} = requiredData.parse(req.body);
        const hashedPassword = await bcrypt.hash(password, 2)
        await userModel.create({
            username,
            email,
            password: hashedPassword, 
            name,
            role: role || 'Student'
        })
        res.json({
            message: "user signed up!"
        })
    }catch(err){
        console.log(err)
        alert("Error while signing up")
    }

})
userRouter.post('/signin', async (req: Request,res: Response) =>{
    try{
        const requiredData = z.object({
            email: z.string().email(),
            password: z.string(),
        })
        const { email, password } = requiredData.parse(req.body);
            const user = await userModel.findOne({ email })

            if(!user){
                res.status(404).json({error: "user not found"})
                return
            }
            const passwordMatch = await bcrypt.compare(password, user.password);

            if(!passwordMatch){
                res.status(401).json({ error: "Invlaid password"})
            }
            if(user && passwordMatch){
                const token = jwt.sign({userId: user._id.toString(), role: user.role},process.env.JWT_SECRET as string)
                res.setHeader('authorization', token)
                res.json({
                    token,
                    message: "User signed up!"
                })
            }
            else{
                return;
            }
        
    }catch(err){
        console.log(err)
        alert("Error while signing up")
    }

})

userRouter.get('/dashboard', userMiddleware, async(req,res)=>{
    const user = await userModel.findOne({
        _id: req.userId
    })
    res.json({
        user
    })
})


export default userRouter