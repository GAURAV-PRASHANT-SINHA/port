// import { createContactCl } from "../controllers/aboutcontroller.js";
import express from 'express';
import { createContactctrl, getcontactCtrl } from '../controllers/contactController.js';
// import { get } from "mongoose";



const contactRouter = express.Router();
contactRouter.post('/contact',createContactctrl);
contactRouter.get('/getcontact',getcontactCtrl);

export default contactRouter;
