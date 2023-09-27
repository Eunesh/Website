import express, { Router } from "express";
const router: Router = express.Router();

import { Signup } from "../Controllers/SignupController";

router.post("/", Signup);

export { router as signup };
