import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.signup);
//router.post("/logout", logout);

export default router;
