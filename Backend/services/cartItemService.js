import CartItem from "../models/cartItem.js";
import userService from "./userService.js";

// Create a new cart item
async function createCartItem(cartItemData) {
  const cartItem = new CartItem(cartItemData);
  cartItem.quantity = 1;
  cartItem.price = cartItem.product.price * cartItem.quantity;
  cartItem.discountedPrice =
    cartItem.product.discountedPrice * cartItem.quantity;

  const createdCartItem = await cartItem.save();
  return createdCartItem;
}

async function updateCartItem(userId, cartItemId, cartItemData) {
  const item = await findCartItemById(cartItemId);
  if (!item) {
    throw new Error("cart item not found: ", cartItemId);
  }
  //User, which create the item.
  const user = await userService.findUserById(item.userId);
  if (!user) {
    throw new Error("User not Found: ", userId);
  }

  if (user._id.toString() === userId.toString()) {
    //if it matches then we update the item
    item.quantity = cartItemData.quantity;
    item.price = item.quantity * item.product.price;
    item.discountedPrice = item.quantity * item.product.discountedPrice;

    //now lets update and save our item.
    const updatedCartItem = await item.save();
    return updatedCartItem;
  } else {
    throw new Error("You can't update this cart item");
  }
}

//Create method for remove cartItem.
async function removeCartItem(userId, cartItemId) {
  //first, find the cartItem
  const cartItem = await findCartItemById(cartItemId);
  //second, find the user
  const user = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  } else {
    throw new Error("You can't remove the item");
  }
}

//Create Method for findCartItemById.
async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error(`Cart item not found with id: ${cartItemId}`);
  }
}

export default {
  updateCartItem,
  removeCartItem,
  findCartItemById,
  createCartItem,
};
