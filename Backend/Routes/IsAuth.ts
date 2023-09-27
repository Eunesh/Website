import express, { Router } from "express";
import { AdminAuthorization } from "../Middleware/AdminAuth";
import { IsAuthController } from "../Controllers/IsAuthControllers";
const router: Router = express.Router();

router.get("/", AdminAuthorization, IsAuthController);

export { router as IsAuth };
