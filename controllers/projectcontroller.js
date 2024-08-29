import asyncHandler from "express-async-handler";
import Project from "../model/ProjectSchema.js";

export const createProjectCtrl = asyncHandler(async(req,res)=>{
    const {title,description,description2,description3,description4,description5,image,link}= req.body;

    try{
        const project = await Project.create({
            title,
            description,
            image,
            link,
            description2,
            description3,
            description4,
            description5
    })

    
    res.json({
        status: "success",
        message: "Project created successfully",
        project,

})}
catch(error){
    res.status(500).json({
        status: "error",
        message: error.message,
    });
}
})



export  const getProjectCtrl= asyncHandler(async(req,res)=>{
    const projects = await Project.find();
    res.json({
        status:"sucess",
        message:"fetch sucessfully",
        projects
    })
})


export const updateProjecteCtrl =asyncHandler(async(req,res)=>{
    const {title,description,description2,description3,description4,description5,image,link,_id}= req.body;

    try{
    const project = await Project .findByIdAndUpdate(
        _id,
        {title,description,description2,description3,description4,description5,image,link,_id},
        {new:true,upsert:true}
    );
    res.json({
        status: "success",
            message: "Project updated successfully",
            project,
    })
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
})

export const deleteproject = asyncHandler(async (req, res) => {
    const {_id}= req.body;
    const project = await Project.findByIdAndDelete(_id);
    res.json({
      status: "success",
      message: "Project deleted successfully",
    project,
    });
  });