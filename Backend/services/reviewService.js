import Review from "../models/review.js";
import productService from "./productService.js";

async function createReview(reqData, user) {
  const product = await productService.findProductById(reqData.productId);

  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    craetedAt: new Date(),
  });

  await product.save();
  return await review.save();
}

//Method for All reviews of particular product
async function getAllReview(productId) {
  const product = await productService.findProductById(reqdata.productId);

  return await Review.find({ product: productId }).populate("user");
}

export default { createReview, getAllReview };
