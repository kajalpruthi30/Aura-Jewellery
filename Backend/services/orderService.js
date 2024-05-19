import cartService from "./cartService.js";
import Address from "../models/address.js";
import Order from "../models/order.js";
import OrderItem from "../models/orderItems.js";

async function createOrder(user, shippedAddress) {
  let address;

  if (shippedAddress._id) {
    let existAddress = await Address.findById(shippedAddress._id);
    address = existAddress;
  }
  //creation of new adress.
  else {
    address = new Address(shippedAddress);
    address.user = user;
    await address.save();

    //Other Method to push the adress:-
    //To fix this issue, you should initialize user.addresses if it's undefined before attempting to push the address:
    //This modification ensures that user.addresses is always an array, preventing the error when trying to push address to it.
    // if (!user.addresses) {
    //   user.addresses = [];
    // }

    user.address.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    //now save this orderItem.
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  //Here create the order after placed orderItems.
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
    orderDate: new Date(),
    createdAt: new Date(),
  });
  const savedOrder = await createdOrder.save();
  return savedOrder;
}

//Create method for Placed order for admin to change the status .
async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

//for confirmed order.
async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

//For shipped order.
async function shipOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELED";

  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

//find UserOrder history.
async function usersOrderHistory(userId) {
  try {
    //fetch all orders of user.
    const orders = await Order.find({ usr: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

//get all orders for admin about how many order comes.
async function getAllOrders() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
}

export default {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
};
