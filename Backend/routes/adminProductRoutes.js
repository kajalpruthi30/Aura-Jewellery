import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";
import authenticate from "../middleware/authenticate.js";

router.post("/", authenticate, productController.createProduct);
router.post("/creates", authenticate, productController.createMultipleProduct);
router.delete("/:id", authenticate, productController.deleteProduct);
router.put("/:id", authenticate, productController.updateProduct);

export default router;
