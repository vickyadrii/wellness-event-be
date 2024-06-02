import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecretKey = process.env.JWT_SECREY_KEY || "";

export const generateToken = (id?: string) => {
  const token = jwt.sign({ id: id }, jwtSecretKey, {
    expiresIn: "24h",
  });
  return token;
};
