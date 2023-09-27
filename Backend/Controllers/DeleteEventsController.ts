import { Request, Response } from "express";
import { prisma } from "../DB/Prisma";
import * as fs from "fs";

// Function to delete  Events in database
async function deleteEvent(eventid: string): Promise<any> {
  const deleteEvent = await prisma.event.delete({
    where: {
      id: eventid,
    },
  });

  return deleteEvent;
}

async function DeleteEvents(req: Request, res: Response) {
  try {
    const Eventname = req.params.Eventname;

    const events = await prisma.event.findMany({
      where: {
        Eventname: Eventname,
      },
    });
    const EventId = events[0].id;
    const thumbnailImage = events[0].ThumbnailImg;
    deleteEvent(EventId);
    fs.unlinkSync(`./images/${thumbnailImage}`); // deleting image in server too after deleting in database

    res.status(201).json({
      message: `Deleted ${Eventname}`,
    });
  } catch (err) {
    console.log(err);
  }
}

export { DeleteEvents };
