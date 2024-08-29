
import express from 'express';
import { createProjectCtrl, deleteproject, getProjectCtrl,updateProjecteCtrl } from '../controllers/projectcontroller.js';


const projectRouter = express.Router();
projectRouter.post('/project',createProjectCtrl);
projectRouter.get('/getproject',getProjectCtrl);
projectRouter.post('/updateproject',updateProjecteCtrl);
projectRouter.post('/deleteproject',deleteproject);

export default projectRouter;