import Category from "../models/category.js";
import Product from "../models/product.js";

async function createProduct(reqData) {
  //tries to find a category with the name provided in reqData.topLevelCategory.
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    const topLevelCategory = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });

    topLevel = await topLevelCategory.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    const secondLevelCategory = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });

    secondLevel = await secondLevelCategory.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    const thirdLevelCategory = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });

    thirdLevel = await thirdLevelCategory.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPersent: reqData.discountPersent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });

  const savedProduct = await product.save();

  return savedProduct;
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId);
}

//Method for findByProductId.
async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not found with id: ", +id);
  }
  return product;
}

//Now getAllProduct Methods: In this method we see about filter, Sorting Features and pgination.
async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  //size is come from frontend or we give it by default.
  (pageSize = pageSize || 10), (pageNumber = pageNumber || 1);

  let query = Product.find().populate("category");

  if (category) {
    // Check if the category exists in the database
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      // If the category exists, filter the products by category and give all the products.
      query = query.where("category").equals(existCategory._id);
    } else {
      // If the category does not exist, return empty result
      return { content: [], currentPage: 1, totalPage: 0 };
    }
  }

  //it gives the array of multiple colors.
  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );

    //it checks that in this colorSet, the all products in the query and the color of these products are present in this colorSet.
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

    query = query.where("color").regex(colorRegex);

    if (sizes) {
      const sizesSet = new sizes();
      query.query.where("sizes.name").in([...sizesSet]);
    }

    if (minPrice && maxPrice) {
      query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }

    if (minDiscount) {
      query = query.where("discountPersent").gt(minDiscount);
    }
    if (stock) {
      if (stock == "in_stock") {
        query = query.where("quantity").gt(0);
      } else if (stock == "out_of_stock") {
        query = query.where("quantity").gt(1);
      }
    }
    if (sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({ discountedPrice: sortDirection });
    }

    const totalProducts = await Product.countDocuments(query);

    const skip = (pageNumber - 1) * pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();

    const totalPages = Math.ceil(totalProducts / pageSize);
    // 50/10 = 5 Pages

    return { content: products, currentPage: pageNumber, totalPages };
  }
}

// This method only for admin.
async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

export default {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};
