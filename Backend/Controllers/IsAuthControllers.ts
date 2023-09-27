import { Request, Response } from "express";

export async function IsAuthController(req: Request, res: Response) {
  res.status(200).json({
    message: "You are Authorize",
  });
}
