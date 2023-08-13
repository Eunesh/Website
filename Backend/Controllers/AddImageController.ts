import  {Request, Response} from 'express';
export default class AddImage{

    async addImage(req:Request, res:Response){
        try{
            const {animalName} = req.body;
            console.log(animalName);
            res.status(201).json({
                message: "added OK I am happy",
            })
            
        }catch(err){
            res.status(500).json({
                message: "Internal Server Error!"
              });

        }
    }


    async updateImage(req:Request, res:Response){
        try{
            const {animalName} = req.body;
            console.log(animalName);
            res.status(201).json({
                message: "updated OK I am Happy",
            })
            
        }catch(err){
            res.status(500).json({
                message: "Internal Server Error!"
              });

        }

    }


    

}