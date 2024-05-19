import express from "express";
const router = express.Router();

import productController from "../controllers/productController.js";
import authenticate from "../middleware/authenticate.js";

router.get("/", authenticate, productController.getAllProducts);
router.get("/id/:id", authenticate, productController.findProductById);

export default router;
