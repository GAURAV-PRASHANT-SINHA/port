import { createAboutctrl,getaboutCtrl } from "../controllers/aboutcontroller.js";
import express from 'express';
// import { get } from "mongoose";



const aboutRouter = express.Router();
aboutRouter.post('/about',createAboutctrl);
aboutRouter.get('/getabout',getaboutCtrl);

export default aboutRouter;


