import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
  level: {
    type: Number,
    required: true,
  },
});

const Category = mongoose.model("Categories", CategorySchema);

export default Category;
