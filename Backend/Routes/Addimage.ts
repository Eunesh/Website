import express, { Router} from 'express';
// import AddImage from '../Controllers/AddImageController';
import {AddImages} from "../Controllers/AddImageController"

const router:Router = express.Router();
// const controller = new AddImage(); 

router.post('/',   AddImages)
// router.put('/', controller.updateImage)


export {router as addimg}
;
