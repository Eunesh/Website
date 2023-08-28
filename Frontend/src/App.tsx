import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import { Route, Routes } from "react-router-dom";
import GalleryBody from "./Components/GalleryBody";
import Contactus from "./Pages/Contactus";
import http from "./AxiosIInstance/Https";
import Members from "./Pages/Members";
import AdminImage from "./Pages/AdminImage";
import { useState, useEffect } from "react";

interface ResType {
  Eventname: string;
  ThumbnailImg: string;
}

function App() {
  const [Event, setEvent] = useState([]);
  // function for calling APi endpoint with axios
  async function Response(url: string) {
    const res = await http.get(url);
    return res;
  }

  async function getEvents() {
    const res = await Response("/getEvent");
    const data = res.data;
    const eventsname = data.map((d: ResType) => {
      return d.Eventname;
    });
    setEvent(eventsname);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      {Event.map((event, index) => {
        return (
          <Route
            path={`/gallery/${event}`}
            element={<GalleryBody name={event} />}
            key={index}
          />
        );
      })}

      <Route path="/contactus" element={<Contactus />} />
      <Route path="/addevent" element={<Events />} />
      <Route path="/members" element={<Members />} />
      <Route path="/addimage" element={<AdminImage />} />
    </Routes>
  );
}

export default App;
