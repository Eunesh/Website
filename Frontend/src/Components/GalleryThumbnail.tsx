import { useState } from "react";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/GalleryThumbnail.css";

import img from "../Components/Images/Hero.jpg";
import img2 from "../Components/Images/Hero2.jpg";

const GalleryThumbnail = () => {
  // Use state for thumbnails images
  const [photos, setPhotos] = useState([img, img2, img2, img2, img2]);

  // use State for Description Of Thumbnail Images
  const [description, setDescription] = useState([
    "Description1",
    "Description2",
    "Description3",
    "Description4",
    "Description5",
  ]);
  return (
    <div className="container">
      <div className="thumbnail__item">
        {photos.map((imageUrl, index) => (
          <div className="thumbnail">
            <img
              src={imageUrl}
              className="thumbnail__img"
              alt={`Thumbnail Img ${index}`}
            />
            <p className="description">{description[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryThumbnail;
