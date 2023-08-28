import express, { Router } from "express";
import { AddImages } from "../Controllers/AddImageController";

const router: Router = express.Router();

router.post("/", AddImages);
// router.put('/', controller.updateImage)

export { router as addimg };
