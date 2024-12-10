
import {Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
require("dotenv").config()



declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}
export const userMiddleware = (req: Request, res: Response , next:NextFunction) =>{
    const token = req.headers['Authorization']
    const cookie = req.cookies
    console.log("cookie:" , cookie, "token: ", token)
    // try {
    //     if(!token){
    //         res.json({error: ""})
    //     }
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    //     req.userId = (decoded as { userId: string }).userId;
    //     next();
    // } catch (error) {
    //     res.status(401).json({ error: 'Invalid or expired token' });
    // }
}