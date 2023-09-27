import { Request, Response } from "express";

import { Create } from "../Communicator/Create";

import { prisma } from "../DB/Prisma";

const create = new Create(prisma);

// Main AddEvent Function
async function AddEvents(req: Request, res: Response) {
  try {
    const { Eventname } = req.body;
    const ThumbnailImg = req.file ? req.file.filename : "Image not found";

    if (Eventname && ThumbnailImg != "Image not found") {
      //Sending to database
      const newEvnt = await create.createEvent({
        Eventname,
        ThumbnailImg,
      });

      res.status(201).json({
        message: newEvnt,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
}

export { AddEvents };
