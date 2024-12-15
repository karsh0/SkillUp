import {Request, Response, NextFunction } from "express"
import jwt, { decode } from "jsonwebtoken"
require("dotenv").config()

export const adminMiddleware = (req: Request,res: Response,next: NextFunction) =>{
      const token = req.headers.authorization;
       console.log(token)
       try{
           if(!token){
               res.json({error: "error"})
           }
           else{
           const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as {userId: string, role: string};
           if(!decoded || decoded.role != "Admin"){
            res.json({message:  "Access denied. Admins only."})
            return
           }
           console.log(decoded);
           req.userId = decoded.userId
           next();
           }
       }
       catch(err){
           res.json({err})
       }
}