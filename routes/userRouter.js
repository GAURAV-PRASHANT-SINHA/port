import exppress from "express";
import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
} from "../controllers/userController.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";

const userRoutes = exppress.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
// userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddresctrl);
export default userRoutes;