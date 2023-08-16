import { Request, Response } from "express";
import { PrismaClient, Event, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Function to create new Event in database
async function createEvent(data: Prisma.EventCreateInput): Promise<Event> {
  const newEvent = await prisma.event.create({
    data,
  });

  return newEvent;
}

// Main AddEvent Function
async function AddEvents(req: Request, res: Response) {
  try {
    const { Eventname } = req.body;
    const ThumbnailImg = req.file ? req.file.filename : "Image not found";

    if (Eventname && ThumbnailImg) {
      //Calling create Event functiion
      const newEvnt = await createEvent({
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
