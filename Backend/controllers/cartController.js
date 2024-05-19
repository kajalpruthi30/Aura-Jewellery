import express from "express";
const router = express.Router();
import cartService from "../services/cartService.js";

const findUserCart = async (req, res) => {
  try {
    const user = req.user; //its passed for middleware because when we make routers for findUserCart then we pass the middleware that set the user to request.
    const cart = await cartService.findUserCart(user.id);
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const user = req.user; //its passed for middleware because when we make routers for findUserCart then we pass the middleware that set the user to request.
    await cartService.addCartItem(user._id.toString(), req.body);
    //return res.status(200).send(cartItem);
    res
      .status(202)
      .json({ message: "Item Added To Cart Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add item to cart.", error: error.message });
  }
};

export default { findUserCart, addItemToCart };
