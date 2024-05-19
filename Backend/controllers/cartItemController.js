import cartItemService from "../services/cartItemService.js";

async function updateCartItem(req, res) {
  const user = await req.user; //its passed for middleware because when we make routers for findUserCart then we pass the middleware that set the user to request.
  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res.status(200).send(updatedCartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

const removeCartItem = async (req, res) => {
  const user = await req.user; //its passed for middleware because when we make routers for findUserCart then we pass the middleware that set the user to request.
  try {
    await cartItemService.removeCartItem(user._id, req.params.id);
    return res.status(200).send({ message: "cart item remove successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default { updateCartItem, removeCartItem };
