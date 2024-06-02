import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecretKey = process.env.JWT_SECREY_KEY || "default";

export const generateToken = (id?: string, role?: string) => {
  const token = jwt.sign({ id: id, role }, jwtSecretKey, {
    expiresIn: "24h",
  });
  return token;
};
