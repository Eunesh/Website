import Homepage from "./Pages/Homepage";
import AddEvents from "./Components/AddEvents";
import Gallery from "./Pages/Gallery";
import { Route, Routes } from "react-router-dom";
import GalleryBody from "./Components/GalleryBody";
import Contactus from "./Pages/Contactus";
import { useState } from "react";
function App() {
  const [index, setIndex] = useState(2);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route
        path={`/gallery/event${index}`}
        element={<GalleryBody name="event1" />}
      />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/addevent" element={<AddEvents />} />
    </Routes>
  );
}

export default App;
