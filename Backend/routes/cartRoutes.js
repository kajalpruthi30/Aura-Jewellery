import express from "express";
const router = express.Router();

import cartController from "../controllers/cartController.js";
import authenticate from "../middleware/authenticate.js";

router.get("/", authenticate, cartController.findUserCart);
router.put("/add", authenticate, cartController.addItemToCart);

export default router;
