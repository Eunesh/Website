import { Request, Response } from "express";
import { PrismaClient, Event, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Function to delete  Events in database
async function deleteEvent(eventid: string): Promise<Event> {
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
    deleteEvent(EventId);

    res.status(201).json({
      message: `Deleted ${Eventname}`,
    });
  } catch (err) {
    console.log(err);
  }
}

export { DeleteEvents };
