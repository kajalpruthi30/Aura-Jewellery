import express from "express";
const router = express.Router();
import adminOrderController from "../controllers/adminOrderController.js";
import authenticate from "../middleware/authenticate.js";

router.get("/", authenticate, adminOrderController.getAllOrders);
router.put(
  "/:orderId/confirmed",
  authenticate,
  adminOrderController.confirmedOrders
);

router.put("/:orderId/ship", authenticate, adminOrderController.shipOrders);
router.put(
  "/:orderId/deliver",
  authenticate,
  adminOrderController.deliverOrders
);

router.put("/:orderId/cancel", authenticate, adminOrderController.cancelOrders);
router.put("/:orderId/delete", authenticate, adminOrderController.deleteOrders);

export default router;
