import { Request, Response } from "express";

export const getDefaultRoute = (req: Request, res: Response) => {
  res.status(200).json({
    code: 200,
    message: "Hello world!",
    data: null,
  });
};
