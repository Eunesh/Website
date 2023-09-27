import Header from "../Components/Header";
import Filler from "../Components/Filler";
import "./PageCss/Aboutus.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import Hero from "../Components/Images/Hero.jpg";
import Paragraph from "../Components/Paragraph";
import { useState } from "react";

const Aboutus = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const sections = [
    <AboutUsSection />,
    <MissionSection />,
    <VisionSection />,
    <HowWeWorkSection />,
    <TrustUsSection />,
  ];

  const titles = [
    "About us",
    "Our Mission",
    "Our Vision",
    "How we work",
    "Why Trust us?",
  ];

  function handleTitleClick(index: number) {
    setSelectedNumber(index);
  }

  return (
    <>
      <Header textcolor="textcolordark" />
      <Filler height="fillerlarge" />
      <div className="container">
        <img src={Hero} className="Aboutus_Img" />
        <div className="Aboutus_navbar_wrapper">
          {sections.map((section, index) => (
            <div key={index} onClick={() => handleTitleClick(index)}>
              <h3
                className={
                  selectedNumber === index ? "nav_title textbold" : "nav_title"
                }
              >
                {titles[index]}
                <div
                  className={selectedNumber === index ? "underline" : ""}
                ></div>
              </h3>
            </div>
          ))}
        </div>
      </div>
      {sections[selectedNumber]}
    </>
  );
};

const AboutUsSection = () => {
  return (
    <div className="paragraph_wrapper">
      <Paragraph>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Paragraph>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className="container">
      <div>Content for Mission Section</div>
    </div>
  );
};

const VisionSection = () => {
  return (
    <div className="container">
      <div>Content for Vision Section</div>
    </div>
  );
};

const HowWeWorkSection = () => {
  return (
    <div className="container">
      <div>Content for How we Work Us Section</div>
    </div>
  );
};

const TrustUsSection = () => {
  return (
    <div className="container">
      <div>Content Trust Us Section</div>
    </div>
  );
};

export default Aboutus;
