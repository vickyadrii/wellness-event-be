import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// User Schema
import User from "@/models/UserModel";

// All types
import { UserType } from "@/types/user";
import { ResponseJSON } from "@/types/response";
import { generateToken } from "@/utils/token";

export const createUserService = async (payload: UserType, response: ResponseJSON) => {
  const { username, password, role, company_name, vendor_name } = payload;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      username,
      password: hashedPassword,
      role,
      company_name,
      vendor_name,
    });

    const user = await newUser.save();

    response({
      code: 201,
      message: "Register successfully!",
      data: user,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return response({
        code: 400,
        message: error.message,
        data: null,
      });
    } else if (error instanceof Error && error.message.includes("E11000 duplicate key error")) {
      return response({
        code: 400,
        message: "Username already exists",
        data: null,
      });
    } else {
      return response({
        code: 500,
        message: "Oops something went wrong!",
        data: null,
      });
    }
  }
};

export const loginUserService = async (payload: UserType, response: ResponseJSON) => {
  const { username, password } = payload;

  if (!username || !password) {
    response({
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

    if (!user)
      return response({
        code: 404,
        data: null,
        message: "User not found!",
      });

    const passwordIsMatch = await bcrypt.compare(password, user.password);

    if (!passwordIsMatch) {
      response({
        code: 400,
        data: null,
        message: "Invalid Password",
      });
    }

    const userObject = user.toObject();
    const parseIdToString = userObject._id.toString();

    const token = generateToken(parseIdToString, userObject.role);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = userObject;

    response({
      code: 200,
      message: "Login successfully!",
      data: { ...userData, token },
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      console.log({ error });
      response({
        code: 400,
        message: error.message,
        data: null,
      });
    } else {
      console.log({ error });
      response({
        code: 500,
        message: "Oops something wrong!",
        data: null,
      });
    }
  }
};
