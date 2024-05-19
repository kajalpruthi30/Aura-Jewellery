import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import passwordRoutes from "./routes/password.routes.js";
import twilioRoutes from "./routes/twilio.routes.js";
import connection from "./db/connection.js";
import cors from "cors";
import userRouters from "./routes/userRoutes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Password routes
app.use("/api", passwordRoutes);

// Twilio Route
app.use("/api/twilio", twilioRoutes);

//User Routes
app.use("/api/users", userRouters);

import productRouter from "./routes/productRoutes.js";
app.use("/api/products", productRouter);

import adminProductRouter from "./routes/adminProductRoutes.js";
app.use("/api/admin/products", adminProductRouter);

import cartRouter from "./routes/cartRoutes.js";
app.use("/api/cart", cartRouter);

import cartItemsRouter from "./routes/cartItemsRoutes.js";
app.use("/api/cart_items", cartItemsRouter);

import orderRouter from "./routes/orderRoutes.js";
app.use("/api/orders", orderRouter);

import adminOrderRouter from "./routes/adminOrderController.js";
app.use("/api/admin/orders", adminOrderRouter);

import reviewRouter from "./routes/reviewRoutes.js";
app.use("/api/reviews", reviewRouter);

import ratingRouter from "./routes/ratingRoutes.js";
app.use("/api/ratings", ratingRouter);

app.listen(PORT, () => {
  connection();
  console.log(`Server is running on port ${PORT}`);
});
