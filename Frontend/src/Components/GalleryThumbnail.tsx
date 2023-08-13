import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/GalleryThumbnail.css";

import img from "../Components/Images/Hero.jpg";
import img2 from "../Components/Images/Hero2.jpg";

// function backIcon() {
//   return (
//     <Link to="/gallery">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         height="1em"
//         className="backIcon"
//         viewBox="0 0 448 512"
//       >
//         <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
//       </svg>
//     </Link>
//   );
// }

const GalleryThumbnail = () => {
  // Use state for thumbnails images
  const [photos, setPhotos] = useState([img, img2, img2, img2, img2]);

  // use State for Description Of Thumbnail Images
  const [description, setDescription] = useState([
    "Event1",
    "Event2",
    "Event3",
    "Event4",
    "Event5",
  ]);

  return (
    <div className="container">
      <div className="thumbnail__item">
        {photos.map((imageUrl, index) => (
          <div className="thumbnail">
            <Link to="/gallery/events">
              <img
                src={imageUrl}
                className="thumbnail__img"
                alt={`Thumbnail Img ${index}`}
                loading="lazy"
              />
            </Link>
            <p className="description">{description[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryThumbnail;
