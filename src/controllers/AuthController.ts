/* eslint-disable @typescript-eslint/no-unused-vars */

import bcrypt from "bcryptjs";
import User from "@/models/UserModel";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { generateToken } from "@/lib/jwt";

export const createUser = async (req: Request, res: Response) => {
  const { username, password, role, company_name, vendor_name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      role,
      company_name,
      vendor_name,
    });

    res.status(201).json({
      code: 201,
      message: "Register successfully!",
      data: user,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      console.log(error.message);
      res.json({
        message: error.message,
        data: null,
      });
    } else {
      console.log(error);
      res.json({
        message: "Oops something wrong!",
        data: null,
      });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      code: 400,
      data: null,
      message: "Email and Password are required!",
    });
    return;
  }

  try {
    const user = await User.findOne({
      username: username,
    });

    if (!user) {
      return res.status(404).json({
        code: 404,
        data: null,
        message: "User not found!",
      });
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      res.status(404).json({
        code: 400,
        data: null,
        message: "Invalid Password",
      });
    }

    const userObject = user.toObject();
    const parseIdToString = userObject._id.toString();

    const token = generateToken(parseIdToString);

    const { password: _, ...userData } = userObject;

    res.status(200).json({
      code: 200,
      message: "Login successfully!",
      data: { ...userData, token },
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      console.log({ error });
      res.json({
        message: error.message,
        data: null,
      });
    } else {
      console.log({ error });
      res.json({
        message: "Oops something wrong!",
        data: null,
      });
    }
  }
};
