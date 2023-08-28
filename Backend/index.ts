import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { addimg } from "./Routes/Addimage";
import { Addevent } from "./Routes/AddEvents";
import { getEvent } from "./Routes/GetEvents";
import { deleteEvent } from "./Routes/deleteEvents";

const app = express();

//for parsing json
app.use(json());

// for accessing image by url from server
app.use("/images", express.static("images"));

//for Cors
const corsconfig = {
  origin: "http://localhost:5173",
};
app.use(cors());

// for Routing
app.use("/api/addImg", addimg);
app.use("/api/addEvent", Addevent);
app.use("/api/getEvent", getEvent);
app.use("/api/deleteEvent", deleteEvent);

export { app };
