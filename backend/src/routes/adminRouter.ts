import { Router } from "express";
import { courseModel, userModel } from "../database/db";
import { adminMiddleware } from "../middleware/adminMiddleware";

const adminRouter = Router()


adminRouter.get('/dashboard', adminMiddleware, async (req,res)=>{
    const admin = await userModel.findOne({ _id: req.userId });
    res.json({ admin });
})

adminRouter.post('/addcourse', adminMiddleware, async (req,res) =>{
    const {title, description, price,thumbnail_url} = req.body;
    await courseModel.create({
        title, description, price, thumbnail_url, instructor_id: req.userId
    })
    res.json({
        message:"course created successfully!"
    })
})

adminRouter.put('/updatecourse', adminMiddleware, async (req,res) =>{
    const {title, description, price,thumbnail_url} = req.body;
    const courseId = req.params.courseId; //add this to fe aswell
    await courseModel.updateOne({_id: courseId}, {
        title, description, price, thumbnail_url, updated_at: Date.now()
    })
    res.json({
        message:"course updated successfully!"
    })
})

adminRouter.delete('/deletecourse', adminMiddleware, async (req,res) =>{
    const {title, description, price,thumbnail_url} = req.body;
    const courseId = req.params.courseId;
    await courseModel.deleteOne({_id: courseId}, {
        title, description, price, thumbnail_url
    })
    res.json({
        message:"course deleted successfully!"
    })
})


export default adminRouter