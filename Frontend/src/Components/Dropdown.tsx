import React, { useState } from "react";
import "./Css/Dropdown.css";
import http from "../AxiosIInstance/Https";

interface DropdownProps {
  options: string[];
  method: "Delete" | "Add";
}

const Dropdown: React.FC<DropdownProps> = ({ options, method }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  console.log("Re render");

  // function for calling APi endpoint with axios for post
  async function DeleteResponse(url: string) {
    const res = await http.delete(url);
    return res;
  }

  async function DeleteEvents() {
    try {
      const response = await DeleteResponse(`/deleteEvent/${selectedOption}`);
      alert(`${selectedOption} Removed`);
    } catch (err) {
      console.log(err);
    }
  }

  async function AddEvents() {
    try {
      alert("Event Added ok ok for fun");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {method === "Delete" ? (
        <button onClick={DeleteEvents} className={`Delete_Button`}>
          Delete
        </button>
      ) : (
        <button onClick={AddEvents} className={`Add_Button`}>
          ADD
        </button>
      )}
    </div>
  );
};

export default Dropdown;
