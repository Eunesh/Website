import { useEffect, useState } from "react";

import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/Header.css";
import { NavLink } from "react-router-dom";

// interface for Icons
interface IconPropsType {
  height: string;
  width: string;
}

// interface for propstye
interface propsType {
  textcolor: string;
}

//Main function
const Header = (props: propsType) => {
  // Array for Title
  const initialTitle: string[] = [
    "Home",
    "About us",
    "Members",
    "Gallery",
    "Contact us",
  ];

  // Array for Links or URL for routing
  const link: string[] = [
    "/",
    "/aboutus",
    "/members",
    "/gallery",
    "/contactUs",
  ];

  // Initializing UseState's
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [title, setTitle] = useState(initialTitle); // UseState for title
  const [links, setLinks] = useState(link); // Use state for  routing links

  // When Pressed CrossIcon
  const handleCancelNavbar = () => {
    setOpenNavbar((isOpen) => !isOpen);
  };

  // When Pressed Hamburger Menu Item
  const handleOpenNavbar = () => {
    setOpenNavbar(true);
    console.log("clicked");
  };

  // When scrolled
  const ChangeBackgroundColor = () => {
    const scrolldistance = window.scrollY;

    if (scrolldistance === 0) {
      setIsScrolled(false);
    } else if (scrolldistance > 80) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeBackgroundColor), []; // When scroll ChangeBackgroundColor function is called
  }, []);

  // Icon for Cross
  function CrossIcon(props: IconPropsType) {
    return (
      <svg
        fill="none"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        height={props.height}
        width={props.width}
        // style="overflow: visible;"
        className="Cross_icon"
        onClick={handleCancelNavbar}
      >
        <path d="M18 6 6 18M6 6l12 12"></path>
      </svg>
    );
  }

  //Icon for hamburger Menu
  function HambergurMenuIcon(props: IconPropsType) {
    return (
      <svg
        fill="currentColor"
        strokeWidth="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height={props.height}
        width={props.width}
        // style="overflow: visible;"
        className="HamburgerIcon"
        onClick={handleOpenNavbar}
      >
        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
      </svg>
    );
  }

  const NavBarMobile = () => {
    return (
      <nav className="activeNav">
        <div className="container">
          <div className="top_header_navbar">
            <p>logo</p>
            <CrossIcon height="0.9em" width="0.9em" />
          </div>
          <div className="Header_section_navbar">
            {title.map((title, index) => {
              return (
                <NavLink
                  key={index}
                  to={links[index]}
                  className="Linktag textcolorlight"
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    );
  };

  function Body() {
    return (
      <div
        className={
          isScrolled
            ? "Header textcolordark boxshadow sticky"
            : `Header background ${props.textcolor} sticky`
        }
      >
        <div className="container spacebetween padding height">
          <a>Logo</a>
          <HambergurMenuIcon height="1em" width="1em" />
          <div className="header_content">
            {title.map((title, index) => {
              return (
                <NavLink
                  key={index}
                  to={links[index]}
                  className={({ isActive }) =>
                    isActive
                      ? isScrolled
                        ? "Linktag isActive textcolordard"
                        : `Linktag isActive ${props.textcolor} `
                      : isScrolled
                      ? "Linktag textcolordark"
                      : `Linktag ${props.textcolor} `
                  }
                  // style={({isActive})=>({color: isActive ? })}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      // </div>
    );
  }

  return <>{openNavbar ? <NavBarMobile /> : <Body />}</>;
};

export default Header;
