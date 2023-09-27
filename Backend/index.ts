import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { addimg } from "./Routes/Addimage";
import { Addevent } from "./Routes/AddEvents";
import { getEvent } from "./Routes/GetEvents";
import { deleteEvent } from "./Routes/deleteEvents";
import { deleteImage } from "./Routes/DeleteImage";
import { login } from "./Routes/Login";
import { signup } from "./Routes/Signup";
import { IsAuth } from "./Routes/IsAuth";
import { RefreshToken } from "./Routes/RefreshToken";
import cookieParser from "cookie-parser";

const app = express();

//for parsing json
app.use(json());

//for parsing cookies
app.use(cookieParser());

// for accessing image by url from server
app.use("/images", express.static("images"));

// Enable CORS for a specific origin with credentials
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// for Routing
app.use("/api/addImg", addimg);
app.use("/api/addEvent", Addevent);
app.use("/api/getEvent", getEvent);
app.use("/api/deleteEvent", deleteEvent);
app.use("/api/deleteImage", deleteImage);
app.use("/api/adminlogin", login);
app.use("/api/adminSignup", signup);
app.use("/api/IsAuth", IsAuth);
app.use("/api/RefreshToken", RefreshToken);

export { app };
