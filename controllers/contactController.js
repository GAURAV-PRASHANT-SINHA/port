import asyncHandler from "express-async-handler";
import Contact from "../model/ContactSchema.js";

export const createContactctrl = asyncHandler(async (req, res) => {
    const { name,gender,email,mobile,address,age ,_id } = req.body;
    // const { id } = req.params; // Assuming ID is provided in the URL params

    try {
        console.log("jhviodrugdrtgijlreijtguerutjioyreuyerjmykljrijhtio34jo")
        // If an ID is provided, update the document; otherwise, create a new one
        const contact= await Contact.findByIdAndUpdate(
       
            _id,
            { name, gender,email, age,address,mobile },
            { new: true, upsert: true } // `upsert: true` will create a new document if not found
        );
//  console.log("laisdfs");
        res.json({
            status: "success",
            message: "Contact updated successfully",
            contact,
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




export const getcontactCtrl = asyncHandler(async(req,res)=>{

  const contacts = await Contact.find();
  // const abouts = await About.find();
  // const projects = await Projects.find();
  // const experience= await Experience.find();
  // const contacts = await Contact.find();
   
  
  res.json({
    status: "success",
    message: "fetch successfully",
    contact:contacts[0],
  });


})




