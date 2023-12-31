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
import Admin from "./Pages/Admin";
import Admindashboard from "./Pages/Admindashboard";
import Aboutus from "./Pages/Aboutus";

interface ResType {
  Eventname: string;
  ThumbnailImg: string;
  imgae: [];
}

function App() {
  const [Event, setEvent] = useState([]);
  const [galleryimage, setGalleryImage] = useState([]);

  // function for calling APi endpoint with axios
  async function Response(url: string) {
    const res = await http.get(url);
    return res;
  }

  async function getEvents() {
    try {
      const res = await Response("/getEvent");
      const data = res.data;
      const eventsname = data.map((d: ResType) => {
        return d.Eventname;
      });

      const galleryimage = data.map((d: ResType) => {
        return d.imgae;
      });
      setGalleryImage(galleryimage);
      setEvent(eventsname);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  // const imageName = galleryimage.map((d: imageType, index) => {
  //   return d[index];
  // });
  console.log(galleryimage);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      {Event.map((event, index) => {
        return (
          <Route
            path={`/gallery/${event}`}
            element={
              <GalleryBody name={event} ImageName={galleryimage[index]} />
            }
            key={index}
          />
        );
      })}

      <Route path="/contactus" element={<Contactus />} />
      <Route path="/addevent" element={<Events />} />
      <Route path="/members" element={<Members />} />
      <Route path="/addimage" element={<AdminImage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admindashboard" element={<Admindashboard />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  );
}

export default App;
