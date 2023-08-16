import  {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';



async function AddImages(req:Request, res:Response){


    try{
        const prisma = new PrismaClient();
        const {Members_name, phone_number, Members_image} = req.body;
        console.log(Members_name, phone_number, Members_image);

        const Create_members = await prisma.members.create({
            data: {
                Members_name,
                phone_number,
                Members_image
            }
        })
        res.status(201).json({
            message: Create_members,
        })
        
    }catch(err){
        res.status(500).json({
            message: "Internal Server Error!"
          });

    }
}


export  {AddImages}
