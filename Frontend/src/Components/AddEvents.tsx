// import http from "../AxiosIInstance/Https";

import "../GlobalCss/util.css";
import "../GlobalCss/Style.css";
import "./Css/AddEvents.css";
import { useState } from "react";
import http from "../AxiosIInstance/Https";
import Dropdown from "./Dropdown";

interface eventtype {
  event: string;
}

interface datatype {
  Eventname: string;
  files: File | null;
}

const AddEvents = () => {
  const [image, setImage] = useState<File | null>(null); // Use State for Image
  // DropEvents
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  // Use State for Animal Name and Animal Description
  const [Event, setEvent] = useState<eventtype>({
    event: "",
  });
  // For Storing all the value from AnimalName and Animal Description input field in SetAnimalData useState
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setEvent({
      ...Event,
      [e.target.name]: e.target.value,
    });
  };

  // For Stroing image on SetImage UseState
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files ? e.target.files[0] : null;
    setImage(image ? image : null);
  };

  // function for calling APi endpoint with axios
  async function Response(url: string, data: datatype) {
    const res = await http.post(url, data);
    return res;
  }

  // After Submit button is clicked
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const eventname = Event.event;
      const data = { Eventname: eventname, files: image };
      const res = await Response("/addEvent", data);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="card">
        <div className="AddEvent_card">
          <h1>Add Events</h1>
          <input
            className="card__Eventname"
            placeholder="Event Name"
            type="text"
            name="event"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="AddContainer">
            <input
              className="card__fileSelector"
              name="Eventthumbnail"
              placeholder="Event Thumbnail"
              type="file"
              onChange={handleImage}
            />
            <button className="AddButton" type="submit">
              Add
            </button>
            <img
              className="thumbnail_img"
              src={image === null ? "" : URL.createObjectURL(image)}
            />
          </div>
        </div>
        <div>
          <h1>Delete Events</h1>
          <Dropdown options={dropdownOptions} />
        </div>
      </div>
    </form>
  );
};

export default AddEvents;
