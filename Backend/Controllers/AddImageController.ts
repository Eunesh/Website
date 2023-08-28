import { Request, Response } from "express";
import { PrismaClient, Image } from "@prisma/client";

const prisma = new PrismaClient();

interface datatype {
  ImageName: string;
  eventid: string;
}

// Function to create new Event in database
async function createImage(data: datatype): Promise<Image> {
  const newEvent = await prisma.image.create({
    data,
  });

  return newEvent;
}

async function AddImages(req: Request, res: Response) {
  try {
    const { eventname, ImageName } = req.body;
    // const ImageName = req.file ? req.file.filename : "image not found";
    console.log(eventname);
    // console.log(Image);

    const event = await prisma.event.findFirst({
      where: {
        Eventname: eventname,
      },
    });
    const eventid = event ? event.id : "null";
    console.log(eventid);

    const response = await createImage({
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
