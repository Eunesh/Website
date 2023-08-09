import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
