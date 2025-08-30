import express from "express";

const router = express.Router();
import { loginController } from "../controller/loginController.js";
import { registerController } from "../controller/registerController.js";

router.post("/login",loginController);
router.post("/register",registerController);
export default router;
