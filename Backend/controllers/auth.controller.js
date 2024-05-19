import userService from "../services/userService.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import cartService from "../services/cartService.js";
import User from "../models/user.model.js";

const signup = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = generateToken.generateToken(user._id);

    //for create the cart of specific user.
    await cartService.createCart(user);

    return res.status(200).send({ jwt, message: "register success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    // const user = await userService.getUserByEmail(email);

    // if (!user) {
    //   return res
    //     .status(404)
    //     .json({ message: "User not found With Email ", email });
    // }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jwt = generateToken.generateToken(user._id);

    return res.status(200).send({ jwt, message: "login success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
export default { login, signup };
