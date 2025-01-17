import mongoose from "mongoose";
const introSchema = new mongoose.Schema({
    welcomeText :{
        type:String,
        required:true
    },
    firstName :{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }  ,
    caption:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});



// const aboutSchema = new mongoose.Schema({
//    lottieURL:{
//     type:String,
//     required:true
//    },
//    description1:{
//     type:String,
//     required:true
//    },
//    description2:{
//     type:String,
//     required:true
//    },

//    skills:{
//     type:Array,
//     required:true
//    }
// });

// const experienceSchema  = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//   period:{
//     type:String,
//     required:true,
//   },
//   company:{
//     type:String,
//     required:true
//   },
//   description:{
//     type:String,
//     required:true
//   },

// });


// const projectSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     },
//     link:{
//         type:String,
//         required:true,
//     },
//     technologies:{
//    type:Array,
//    required:true
//     }


// });

// const contactSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     mobile:{
//         type:String,
//         required:true
//     },
//     age:{
//         type:String,
//         required:true
//     },
//     country:{
//         type:String,
//         required:true
//     },
//     address:{
//         type:String,
//         required:true
//     },
//     gender:{
//         type:String,
//         required:true
//     }

// })

    // export const Intro=mongoose.model("Intro",introSchema);
//    export  const About=mongoose.model("abouts",aboutSchema)
//     export const Experience = mongoose.model("experience",experienceSchema)
//     export const Projects= mongoose.model("projects",projectSchema)
//     export const Contact=mongoose.model("contacts",contactSchema)
 
    
    
const Intro = mongoose.model("Intro",introSchema);
export default Intro;