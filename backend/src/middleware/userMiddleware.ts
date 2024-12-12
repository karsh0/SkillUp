
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
    const token = req.headers['authorization']
    try {
        if(!token || token == undefined){
            res.json({error: "error"})
        }
        else{
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET || "");
        req.userId = decoded.userId;
        next();
        }
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
}