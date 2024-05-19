import Cart from "../models/cart.js";
import CartItem from "../models/cartItem.js";
import Product from "../models/product.js";

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  let cart = await Cart.findOne({ user: userId });
  //find the how many items in the cart by using cartId
  let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
  cart.cartItems = cartItems;

  let totalPrice = 0;
  let totalDiscountedPrice = 0;
  let totalItem = 0;

  for (const cartItem of cart.cartItems) {
    totalPrice += cartItem.price;
    totalDiscountedPrice += cartItem.discountedPrice;
    totalItem += cartItem.quantity;
  }

  cart.totalPrice = totalPrice;
  cart.totalItem = totalItem;
  cart.totalDiscountedPrice = totalDiscountedPrice;
  cart.discount = totalPrice - totalDiscountedPrice;

  return cart;
}

//Create method for add item to cart
async function addCartItem(userId, req) {
  const cart = await Cart.findOne({ user: userId });
  const product = await Product.findById(req.productId);

  const isPresent = await CartItem.findOne({
    cart: cart._id,
    product: product._id,
    userId,
  });

  if (!isPresent) {
    const cartItem = new CartItem({
      product: product._id,
      cart: cart._id,
      quantity: 1,
      userId,
      price: product.price,
      size: req.size,
      discountedPrice: product.discountedPrice,
    });

    //now save this item and add this cartitem to cart.

    const createdCartItem = await cartItem.save();
    cart.cartItems.push(createdCartItem);
    await cart.save();
  }
  return "Item Added to Cart";
}

export default { createCart, findUserCart, addCartItem };
