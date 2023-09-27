import { Request, Response } from "express";
import { prisma } from "../DB/Prisma";
import { verify } from "jsonwebtoken";
import { CreateToken } from "../Helper/CreateJWT";

export async function RefreshToken(req: Request, res: Response) {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(403).json({
      success: false,
      message: "Sorry you have no Tokens",
    });
  }

  // Checking if Refresh Token is genuine or not by verifying
  let RefreshVerifyToken: any = null;
  try {
    RefreshVerifyToken = verify(refreshToken, process.env.PUBLIC_KEY_REFRESH!);
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
      AdminID: RefreshVerifyToken.id,
    },
  });

  if (!admin) {
    return res.status(403).json({
      success: false,
      message: "Sorry you are not available on database",
    });
  }

  // Creating  access Token
  const newAccessToken = CreateToken(
    { Admin_id: admin.AdminID },
    "5min",
    process.env.PRIVATE_KEY!
  );

  //Creating Refresh Token
  const NewRefreshToken = CreateToken(
    { id: admin.AdminID },
    "1d",
    process.env.PRIVATE_KEY_REFRESH!
  );

  // Sending  access Cookie with JWT Token
  res.cookie("accessToken", newAccessToken, {
    httpOnly: true,
    maxAge: 300000,
    sameSite: "strict",
    secure: true,
    path: "/",
  });

  // Sending  refresh  Cookie with JWT Token
  res.cookie("refreshToken", NewRefreshToken, {
    httpOnly: true,
    maxAge: 8.64e7,
    sameSite: "strict",
    secure: true,
    path: "/",
  });

  res.status(200).json({
    sucess: true,
    message: "Your new Access Token is Provided",
  });
}
