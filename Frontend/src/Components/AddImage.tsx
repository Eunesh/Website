import "../GlobalCss/util.css";
import "../GlobalCss/Style.css";
import "./Css/AddEvents.css";
import { useState } from "react";
import http from "../AxiosIInstance/Https";
import Dropdown from "./Dropdown";

interface imagetype {
  image: string;
}

interface datatype {
  Imagename: string;
  files: File | null;
}

const AddImage = () => {
  const [photo, setPhoto] = useState<File | null>(null); // Use State for Image

  // For Stroing image on SetImage UseState
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files ? e.target.files[0] : null;
    setPhoto(image ? image : null);
  };

  // function for calling APi endpoint with axios for post
  //   async function postResponse(url: string, data: datatype) {
  //     const res = await http.post(url, data);
  //     return res;
  //   }

  return (
    <form className="">
      <div className="addImage_wrapper">
        <div className="AddImage_card">
          <h1>Add Image</h1>
          <div className="AddContainer">
            <input
              className="card__fileSelector"
              name="Image"
              placeholder="Image"
              type="file"
              onChange={handleImage}
            />
            <Dropdown options={["joke", "Joker"]} method="Delete" />
            <img
              className="thumbnail_img"
              src={photo === null ? "" : URL.createObjectURL(photo)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddImage;
