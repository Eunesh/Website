import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import http from "../AxiosIInstance/Https";

interface ResType {
  Eventname: string;
  ThumbnailImg: string;
}

const AddImage = () => {
  // DropEvents name useState
  const [eventname, setEventname] = useState([]);
  const [image, setImage] = useState<File | null>(null); // Use State for Image

  // function for calling APi endpoint with axios to get
  async function getResponse(url: string) {
    const res = await http.get(url);
    return res;
  }

  // For Stroing image on SetImage UseState
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files ? e.target.files[0] : null;
    setImage(image ? image : null);
  };

  // function for calling getEvents name
  const getEvent = async () => {
    try {
      const res = await getResponse("/getEvent");
      const data = res.data;
      const eventsname = data.map((d: ResType) => {
        return d.Eventname;
      });
      setEventname(eventsname);
    } catch (err) {
      console.log(err);
    }
  };

  // use effect for calling function
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <div>AddImage</div>
      <input
        className="card__fileSelector"
        name="Eventthumbnail"
        placeholder="Event Thumbnail"
        type="file"
        onChange={handleImage}
      />
      <Dropdown options={eventname} method="Add" photo={image} />
    </>
  );
};

export default AddImage;
