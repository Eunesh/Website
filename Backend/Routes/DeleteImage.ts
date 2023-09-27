import express, { Router } from "express";

const router: Router = express.Router();

import { DeleteImage } from "../Controllers/DeleteImageControllers";

router.delete("/:Imagename", DeleteImage); // params as id

export { router as deleteImage };
