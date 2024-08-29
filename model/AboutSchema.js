import mongoose from "mongoose";
const aboutSchema = new mongoose.Schema({
    lottieURL: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  });
  const About = mongoose.model("About",aboutSchema);
  export default About;