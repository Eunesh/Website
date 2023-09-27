import express, { Router } from "express";
import { AddImages } from "../Controllers/AddImageController";
import upload from "../Multer/Multer";

const router: Router = express.Router();

router.post("/", upload.single("files"), AddImages);
// router.put('/', controller.updateImage)

export { router as addimg };
