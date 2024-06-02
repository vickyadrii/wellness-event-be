import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const collection = process.env.MONGODB_COLLECTION;
const options = process.env.MONGODB_OPTIONS;

const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}/${collection}?${options}`;

export const dbConfig = async () => {
  await mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch(() => {
      console.log("Connection Failed!");
    });
};
