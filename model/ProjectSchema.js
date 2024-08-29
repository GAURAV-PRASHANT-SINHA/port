import mongoose from "mongoose";
const projectsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
    description4: {
      type: String,
      required: true,
    },
    description5: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
   
  });
  const Project = mongoose.model("Project",projectsSchema);
  export default Project;