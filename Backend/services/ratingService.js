import Rating from "../models/rating.js";
import productService from "./productService.js";

async function createRating(req, user) {
  const product = await productService.findProductById(req.productId);

  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: req.rating,
    createdAt: new Date(),
  });
  return await rating.save();
}

async function getAllRating(productId) {
  return await Rating.find({ product: productId });
}

export default { createRating, getAllRating };
