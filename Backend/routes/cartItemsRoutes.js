import express from "express";
const router = express.Router();
import cartItemController from "../controllers/cartItemController.js";
import authenticate from "../middleware/authenticate.js";

router.put("/:id", authenticate, cartItemController.updateCartItem);
router.delete("/:id", authenticate, cartItemController.removeCartItem);

export default router;
