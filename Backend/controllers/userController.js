//import { jwt } from "twilio";
import userService from "../services/userService.js";

// [Bearer[0], token[1]]
const getUserProfile = async (req, res) => {
  const jwt = req.headers.authorization?.split(" ")[1];
  //console.log("req", jwt);

  try {
    if (!jwt) {
      return res.status(404).send({ error: "token not found" });
    }
    const user = await userService.getUserProfileByToken(jwt);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export default { getUserProfile, getAllUsers };
