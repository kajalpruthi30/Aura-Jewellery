import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", userController.getUserProfile);
router.get("/", userController.getAllUsers);

export default router;
