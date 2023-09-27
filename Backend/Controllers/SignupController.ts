import { Request, Response } from "express";
import { prisma } from "../DB/Prisma";

import { Create } from "../Communicator/Create";
import { Hash } from "../Helper/Hashing";

const create = new Create(prisma);

export async function Signup(req: Request, res: Response) {
  try {
    const { AdminUsername, unhashedpassword } = req.body;

    const password = await Hash(unhashedpassword);

    const AdminCreated = await create.createAdmin({
      AdminUsername,
      password,
    });

    if (AdminCreated) {
      res.status(201).json({
        message: "Admin Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
