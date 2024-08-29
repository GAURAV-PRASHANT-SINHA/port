import {  createIntroctrl,  getdataCtrl,  } from "../controllers/portofoliocontroller.js";
import express from 'express';


const portofolioRouter = express.Router();
portofolioRouter.post("/intro",createIntroctrl);
portofolioRouter.get("/getData",getdataCtrl);

export default portofolioRouter;