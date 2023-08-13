import express, {Request, Response, Router} from 'express';
import AddImage from '../Controllers/AddImageController';

const router:Router = express.Router();
const controller = new AddImage(); 

router.post('/',  controller.addImage)
router.put('/', controller.updateImage)


export {router as addimg}
;
