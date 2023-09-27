import express, { Router } from "express";
const router: Router = express.Router();
import { GetEvent } from "../Controllers/GetEventController";

router.get("/", GetEvent);

export { router as getEvent };
