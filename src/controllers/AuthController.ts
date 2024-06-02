import { Request, Response } from "express";

import { createUserService, loginUserService } from "@/services/authService";

export const createUser = (req: Request, res: Response) => {
  createUserService(req.body, ({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};

export const loginUser = (req: Request, res: Response) => {
  loginUserService(req.body, ({ code = 500, data, message }) => {
    res.status(code).json({
      code,
      data,
      message,
    });
  });
};
