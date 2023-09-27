// import http from "../AxiosIInstance/Https";

import "../GlobalCss/util.css";
import "../GlobalCss/Style.css";
import "./Css/AddEvents.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import http from "../AxiosIInstance/Https";

interface eventtype {
  event: string;
}

interface datatype {
  Eventname: string;
  files: File | null;
}

const AddEvents = () => {
  const [image, setImage] = useState<File | null>(null); // Use State for Image

  // Use State for Event Name
  const [Event, setEvent] = useState<eventtype>({
    event: "",
  });
  // For Storing all the value from EventName  input field in SetEvent useState
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };
  // For Stroing image on SetImage UseState
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files ? e.target.files[0] : null;
    setImage(image ? image : null);
  };

  // function for calling APi endpoint with axios for post
  async function postResponse(url: string, data: datatype) {
    const res = await http.post(url, data);
    return res;
  }

  // When Submit button is clicked
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const eventname = Event.event;
      const data = { Eventname: eventname, files: image };
      const res = await postResponse("/addEvent", data);

      console.log(res);

      alert("Events Added");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Sidebar />
      <form className="" onSubmit={handleSubmit}>
        <div className="addEvent_wrapper">
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
        </div>
      </form>
    </>
  );
};

export default AddEvents;
