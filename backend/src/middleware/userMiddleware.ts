
import {Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
require("dotenv").config()
const JWT_SECRET = "thejwt"

interface userdecode{
    userId: string,
    role: string
}

export const userMiddleware = (req: Request, res: Response , next:NextFunction) =>{
     const token = req.headers.token as string;

        console.log(token)
        if(!token){
            res.json({error: "error"})
            return
        }
        const decoded = jwt.verify(token,JWT_SECRET) as userdecode;
        console.log("decoded: ", decoded);
        req.userId = decoded.userId
        next();
            
}