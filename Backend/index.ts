import express from 'express';
import { json} from 'body-parser';
import {addimg} from "./Routes/Addimage"


const app = express();
app.use(json())
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static("images"));
app.use('/api/add', addimg )


export {app}