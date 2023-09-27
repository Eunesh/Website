import { Request, Response } from "express";
import { prisma } from "../DB/Prisma";
import { ValidateUser } from "../Helper/Hashing";
import { CreateToken } from "../Helper/CreateJWT";

async function Login(req: Request, res: Response) {
  try {
    const { AdminUsername, unhashedpassword } = req.body;

    console.log(AdminUsername);
    console.log(unhashedpassword);

    if (!AdminUsername || !unhashedpassword) {
      return res.status(401).json({
        message: "Please Provide Username and password",
      });
    }

    const adminDetails = await prisma.admin.findFirst({
      where: {
        AdminUsername: AdminUsername,
      },
    });

    if (!adminDetails) {
      return res.status(401).json({
        message: "Please Provide Valid username ",
      });
    }

    const hashedpassword = adminDetails.password!;

    const isMatched = await ValidateUser(unhashedpassword, hashedpassword);

    if (!isMatched) {
      return res.status(401).json({
        message: "Your password is incorrect",
      });
    }

    // Creating  access Token
    const accessToken = CreateToken(
      { Admin_id: adminDetails.AdminID },
      "5min",
      process.env.PRIVATE_KEY!
    );

    // Creating Refresh Token
    const refreshToken = CreateToken(
      { id: adminDetails.AdminID },
      "1d",
      process.env.PRIVATE_KEY_REFRESH!
    );

    // Sending  access Cookie with JWT Token
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 300000,
      sameSite: "strict",
      secure: true,
      path: "/",
    });

    // Sending  refresh  Cookie with JWT Token
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 8.64e7,
      sameSite: "strict",
      secure: true,
      path: "/",
    });

    res.status(200).json({
      message: "Login Sucessfull",
    });
  } catch (error) {
    console.log(error);
  }
}

export { Login };
