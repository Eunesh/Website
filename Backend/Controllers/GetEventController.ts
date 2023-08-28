import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function GetEvent(req: Request, res: Response) {
  try {
    const events = await prisma.event.findMany({
      //   include: {
      //     imgae: true,
      //   },
    });
    res.status(201).send(events);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
}

export { GetEvent };
