
import asyncHandler from "express-async-handler";
import About from "../model/AboutSchema.js";

export const createAboutctrl = asyncHandler(async (req, res) => {
    const { lottieURL,description1,description2,skills,_id } = req.body;
    // const { id } = req.params; // Assuming ID is provided in the URL params

    try {
      
        // If an ID is provided, update the document; otherwise, create a new one
        const about = await About.findByIdAndUpdate(
         
            _id,
            { lottieURL, description1, description2, skills },
            { new: true, upsert: true } // `upsert: true` will create a new document if not found
        );
//  console.log("laisdfs");
        res.json({
            status: "success",
            message: "About updated successfully",
            about,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
});

// Controller to fetch all intros
// export const getDataCtrl = asyncHandler(async (req, res) => {
//     try {
//         const intros = await Intro.find();
//         res.json({
//             status: "success",
//             message: "Fetched successfully",
//             intros, // Returning all intros
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: "error",
//             message: error.message,
//         });
//     }
// });




export const getaboutCtrl = asyncHandler(async(req,res)=>{

  const abouts = await About.find();
  // const abouts = await About.find();
  // const projects = await Projects.find();
  // const experience= await Experience.find();
  // const contacts = await Contact.find();
   
  
  res.json({
    status: "success",
    message: "fetch successfully",
    about:abouts[0],
  });


})




