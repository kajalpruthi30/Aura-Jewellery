import ratingService from "../services/ratingService.js";

const createRating = async (req, res) => {
  const user = req.user;
  try {
    const rating = await ratingService.createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  const user = req.user;
  try {
    const ratings = await ratingService.getAllRating(productId);
    return res.status(201).send(ratings);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default { createRating, getAllRatings };
