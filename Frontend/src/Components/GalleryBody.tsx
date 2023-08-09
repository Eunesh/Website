import img from "./Images/Hero.jpg";
import img2 from "./Images/Hero2.jpg";
import "./Css/GalleryBody.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import { useState } from "react";
// import Title from "./Title";

const GalleryBody = () => {
  const [photos, setPhotos] = useState([
    img,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
  ]);

  return (
    <div className="container">
      <div className="gallery">
        {photos.map((imageUrl, index) => (
          <div key={index} className={`gallery__item--${index}`}>
            <img
              src={imageUrl}
              className="gallery__img"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBody;
