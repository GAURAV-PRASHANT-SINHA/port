import { createExperienceCtrl,deleteexp,getExperienceCtrl, updateexperienceCtrl } from "../controllers/experiencecontroller.js";
import express from "express"

const experienceRouter = express.Router();
experienceRouter.post('/exp',createExperienceCtrl);
experienceRouter.get('/exp1',getExperienceCtrl);
experienceRouter.post('/exp2',updateexperienceCtrl);
experienceRouter.post('/del1',deleteexp);
export default experienceRouter;