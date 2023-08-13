import img from "./Images/Hero.jpg";
import img2 from "./Images/Hero2.jpg";
import "./Css/GalleryBody.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/gallery">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          className="backIcon"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </Link>
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
