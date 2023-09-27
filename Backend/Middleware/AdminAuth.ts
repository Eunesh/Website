import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../DB/Prisma";

export async function AdminAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const AdminToken = req.cookies.accessToken;

    if (!AdminToken) {
      return res.status(403).json({
        success: false,
        message: "Sorry you need to be loged in First",
      });
    }
    let verifyToken: any = null;
    try {
      verifyToken = verify(AdminToken, process.env.PUBLIC_KEY!);
    } catch (err) {
      console.log(err);
      return res.status(403).json({
        success: false,
        message: "Sorry you are unverified",
      });
    }

    ///  if admin is present in database
    const admin = await prisma.admin.findFirst({
      where: {
        AdminID: verifyToken.Admin_id,
      },
    });

    if (!admin) {
      return res.status(403).json({
        success: false,
        message: "Sorry you are unverified",
      });
    }

    next();
  } catch (err) {
    res.status(403).json({ success: false, message: "UnAuthorized:" });
  }
}
