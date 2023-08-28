import express, { Router } from "express";

const router: Router = express.Router();

import { DeleteEvents } from "../Controllers/DeleteEventsController";

router.delete("/:Eventname", DeleteEvents); // params as id

export { router as deleteEvent };
