import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import { Route, Routes } from "react-router-dom";
import GalleryBody from "./Components/GalleryBody";
import Contactus from "./Pages/Contactus";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/events" element={<GalleryBody />} />
      <Route path="/contactus" element={<Contactus />} />
    </Routes>
  );
}

export default App;
