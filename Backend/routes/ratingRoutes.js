import express from "express";
const router = express.Router();

import ratingController from "../controllers/ratingController.js";
import authenticate from "../middleware/authenticate.js";

router.post("/create", authenticate, ratingController.createRating);
router.put("/product/:productId", authenticate, ratingController.getAllRatings);

export default router;
