import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  discountedPercent: {
    type: Number,
  },

  //When we create the object then how much quantity we need to add.
  quantity: {
    type: Number,
    required: true,
  },
  // brand: {
  //   type: String,
  // },
  // color: {
  //   type: String,
  // },
  // size: [
  //   {
  //     name: {
  //       type: String,
  //     },
  //     quantity: {
  //       type: Number,
  //     },
  //   },
  // ],
  imageUrl: {
    type: String,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  numRatings: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
},
{ timestamps: true }
);

const Product = mongoose.model("Products", ProductSchema);

export default Product;
