import express from 'express'
import portofolioRouter from '../routes/portofoliorouter.js';
import cors from "cors";
import dbConnect from '../config/dbconnect.js';
import { notFound ,globalErrhandler } from '../globalErrHandler/globalErrHandler.js';
import aboutRouter from '../routes/aboutRouter.js';
import experienceRouter from '../routes/experienceRouter.js';
import projectRouter from '../routes/projectRouter.js';
import userRoutes from '../routes/userRouter.js';
import dotenv from "dotenv";
import contactRouter from '../routes/contactRouter.js';
dotenv.config();
dbConnect();

 const app= express();
 app.use(cors());
 //pass incoming data
app.use(express.json());
//url encoded
app.use(express.urlencoded({ extended: true }));
app.use("/api/",portofolioRouter);
app.use('/api',aboutRouter);
app.use('/api',experienceRouter);
app.use('/api',projectRouter);
app.use('/api',userRoutes);
app.use('/api',contactRouter);
app.use(notFound);
app.use(globalErrhandler);
export default app;