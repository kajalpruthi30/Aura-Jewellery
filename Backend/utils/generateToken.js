import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) {
    throw new Error("JWT secret key is missing or undefined");
  }
  const token = jwt.sign({ userId }, secretKey, {
    expiresIn: "30d",
  });
  return token;
};

const getUserIdFromToken = (token) => {
  //.verify() method to verify and decode the token.
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //If the token is valid and the signature is verified, it returns the userId extracted from the decoded token.
  return decodedToken.userId;
};

export default { generateToken, getUserIdFromToken };
