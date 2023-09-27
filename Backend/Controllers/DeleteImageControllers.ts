import { Request, Response } from "express";
import { prisma } from "../DB/Prisma";
import * as fs from "fs";

// Creating instance of primsa

// Function to delete  Events in database
async function deleteImg(id: string | undefined): Promise<any> {
  const deleteEvent = await prisma.image.delete({
    where: {
      ImageId: id,
    },
  });
  return deleteEvent;
}

async function DeleteImage(req: Request, res: Response) {
  try {
    const Imagename = req.params.Imagename;

    const image = await prisma.image.findFirst({
      where: {
        ImageName: Imagename,
      },
    });

    const ImageId = image?.ImageId;
    const Image = image?.ImageName;

    deleteImg(ImageId);

    fs.unlinkSync(`./images/${Image}`); // deleting image in server too after deleting in database

    res.status(201).json({
      message: `Deleted ${Imagename}`,
    });
  } catch (err) {
    console.log(err);
  }
}

export { DeleteImage };
