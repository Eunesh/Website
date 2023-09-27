import { Request, Response } from "express";
import { prisma } from "../DB/Prisma";

import { Create } from "../Communicator/Create";

const create = new Create(prisma);

async function AddImages(req: Request, res: Response) {
  try {
    const { Eventname } = req.body;
    const ImageName = req.file ? req.file.filename : "Image not found";

    const event = await prisma.event.findFirst({
      where: {
        Eventname: Eventname,
      },
    });
    const eventid = event ? event.id : "null";

    const response = await create.createImage({
      ImageName,
      eventid,
    });

    res.status(201).json({
      message: response,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
    });

    console.log(err);
  }
}

export { AddImages };
