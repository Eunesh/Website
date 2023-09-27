import express, { Router } from "express";
const router: Router = express.Router();
import { Login } from "../Controllers/LoginControllers";

router.post("/", Login);

export { router as login };
