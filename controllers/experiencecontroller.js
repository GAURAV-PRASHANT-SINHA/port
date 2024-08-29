import asyncHandler from "express-async-handler";
import Experience from "../model/ExperienceSchema.js";

export const createExperienceCtrl = asyncHandler(async(req,res)=>{
    const {title,period,company,description,description2}= req.body;

    try{
        const experience = await Experience.create({
            title,
            period,
            company,
            description,
            description2
    })

    
    res.json({
        status: "success",
        message: "Experience created successfully",
        experience,

})}
catch(error){
    res.status(500).json({
        status: "error",
        message: error.message,
    });
}
})



export  const getExperienceCtrl= asyncHandler(async(req,res)=>{
    const experiences = await Experience.find();
    res.json({
        status:"sucess",
        message:"fetch sucessfully",
        experiences:experiences
    })
})


export const updateexperienceCtrl =asyncHandler(async(req,res)=>{
    const {title,company,period,description,description2,_id}= req.body;

    try{
    const experience = await Experience .findByIdAndUpdate(
        _id,
        {title,company,period,description,description2},
        {new:true,upsert:true}
    );
    res.json({
        status: "success",
            message1: "Intro updated successfully",
            experience
    })
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
})

export const deleteexp = asyncHandler(async (req, res) => {
    const {_id}= req.body;
    const experience = await Experience.findByIdAndDelete(_id);
    res.json({
      status: "success",
      message: "Experience deleted successfully",
    experience,
    });
  });