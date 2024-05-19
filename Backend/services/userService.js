import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password, day, month, year } = userData;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User already exist with email: ", email);
    }

    password = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      birthDate: {
        day,
        month,
        year,
      },
    });
    console.log("created user", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    //.populate("address");
    if (!user) {
      throw new Error("user not found with id: ", userId);
    }
    return user;
  } catch {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne(email);
    if (!user) {
      throw new Error("user not found with email: ", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = generateToken.getUserIdFromToken(token);
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("user not found with id: ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  createUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
