// import Intro from "../model/portfoliomodel.js"
// import  asyncHandler from "express-async-handler";

// export const createIntroctrl = asyncHandler(async(req,res)=>{
//     const{welcomeText,firstName,lastName,caption,description}=req.body;
//     // create
    
//     const intro = await Intro.findOneAndUpdate({_id:req.id},{

//      welcomeText:welcomeText,
//      firstName:firstName,
//      lastName:lastName,
//      caption:caption,
//      description:description
//     },{new:true});

//     res.json({
//         status: "success",
//         message: "Intro updated successfully",
//         intro,
//       });

// })

import Intro from "../model/portfoliomodel.js";
import asyncHandler from "express-async-handler";

// Controller to create or update an intro
export const createIntroctrl = asyncHandler(async (req, res) => {
    const { welcomeText, firstName, lastName, caption, description,_id } = req.body;
    // const { id } = req.params; // Assuming ID is provided in the URL params

    try {
     
        // If an ID is provided, update the document; otherwise, create a new one
        const intro = await Intro.findByIdAndUpdate(
         
            _id,
            { welcomeText, firstName, lastName, caption, description },
            { new: true, upsert: true } // `upsert: true` will create a new document if not found
        );

        res.json({
            status: "success",
            message: "Intro updated successfully",
            intro,
        });
    } 
    
    catch (error) {
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




export const getdataCtrl = asyncHandler(async(req,res)=>{

  const intros = await Intro.find();
  // const abouts = await About.find();
  // const projects = await Projects.find();
  // const experience= await Experience.find();
  // const contacts = await Contact.find();
   
  
  res.json({
    status: "success",
    message: "fetch successfully",
    intro:intros[0],
  });


})




