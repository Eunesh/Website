import "../GlobalCss/util.css";
import "../GlobalCss/Style.css";
import { useState, useEffect } from "react";
import http from "../AxiosIInstance/Https";
import Dropdown from "./Dropdown";

interface ResType {
  Eventname: string;
  ThumbnailImg: string;
}

const DeleteEvents = () => {
  // DropEvents name useState
  const [eventname, setEventname] = useState([]);

  // function for calling APi endpoint with axios to get
  async function getResponse(url: string) {
    const res = await http.get(url);
    return res;
  }

  // function for calling getEvents name
  const getEvent = async () => {
    try {
      const res = await getResponse("/getEvent");
      const data = res.data;
      const eventsname = data.map((d: ResType) => {
        return d.Eventname;
      });
      setEventname(eventsname);
    } catch (err) {
      console.log(err);
    }
  };

  // use effect for calling function
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div>
      <h1>Delete Events</h1>
      <Dropdown options={eventname} method="Delete" />
    </div>
  );
};

export default DeleteEvents;
