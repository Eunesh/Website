import express, { Router } from "express";
const router: Router = express.Router();

import { RefreshToken } from "../Controllers/RefreshToken";

router.post("/", RefreshToken);

export { router as RefreshToken };
