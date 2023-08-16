import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/GalleryThumbnail.css";
import http from "../AxiosIInstance/Https";
import Spinner from "./Spinner";

interface ResType {
  Eventname: string;
  ThumbnailImg: string;
}

const GalleryThumbnail = () => {
  // Use state for thumbnails images
  const [photos, setPhotos] = useState([]);

  // use State for Description Of Thumbnail Images
  const [description, setDescription] = useState([]);

  const [isLoading, setIsLoading] = useState(true); // useState for Loading

  // function for calling APi endpoint with axios
  async function Response(url: string) {
    const res = await http.get(url);
    return res;
  }

  async function getEvents() {
    try {
      const res = await Response("/getEvent");
      const data = res.data;

      const photos = data.map((d: ResType) => {
        return d.ThumbnailImg;
      });

      const eventsname = data.map((d: ResType) => {
        return d.Eventname;
      });

      setPhotos(photos);
      setDescription(eventsname);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  // use effect for calling function
  useEffect(() => {
    getEvents();
  }, []);

  // if data is not fatched from API then it show loading spinner
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="thumbnail__item">
        {photos.map((photo, index) => (
          <div className="thumbnail" key={index}>
            <Link to={`/gallery/${description[index]}`}>
              <img
                src={`http://localhost:5000/images/${photo}`}
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
