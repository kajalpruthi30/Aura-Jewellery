import generateToken from "../utils/generateToken.js";
import userService from "../services/userService.js";

const authenticate = async (req, res, next) => {
  //Bearer Token....
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).send({ message: "token not found" });
    }
    const userId = generateToken.getUserIdFromToken(token);
    const user = await userService.findUserById(userId);
    req.user = user;
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next(); //After all process completition, then this middleware help to go for next request or step.
};

export default authenticate;
