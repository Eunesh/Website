import express, { Router} from 'express';
import upload from '../Multer/Multer';
const router:Router = express.Router();

import { AddEvents } from '../Controllers/AddEventControllers';


router.post('/', upload.single('files'), AddEvents);


export {router as Addevent}