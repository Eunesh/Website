import express, { Router } from "express";
import upload from "../Multer/Multer";
const router: Router = express.Router();

import { AdminAuthorization } from "../Middleware/AdminAuth";

import { AddEvents } from "../Controllers/AddEventControllers";

router.post("/", AdminAuthorization, upload.single("files"), AddEvents);

export { router as Addevent };
