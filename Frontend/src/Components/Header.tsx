import { useEffect, useState } from "react";

import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/Header.css";

interface propstype {
  headerTitle1: string;
  headerTitle2: string;
  headerTitle3: string;
  headerTitle4: string;
  headerTitle5: string;
}

interface IconPropsType {
  height: string;
  width: string;
}

//Main function
const Header = (props: propstype) => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // When Pressed CrossIcon
  const handleCancelNavbar = () => {
    setOpenNavbar((isOpen) => !isOpen);
  };

  // When Pressed Hamburger Menu Item
  const handleOpenNavbar = () => {
    setOpenNavbar(true);
    console.log("clicked");
  };

  const ChangeBackgroundColor = () => {
    const scrolldistance = window.scrollY;
    console.log(scrolldistance);

    if (scrolldistance === 0) {
      setIsScrolled(false);
    } else if (scrolldistance > 100) {
      setIsScrolled(true);
    }
  };

  // After scrolling effect
  useEffect(() => {
    window.addEventListener("scroll", ChangeBackgroundColor), [];
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
      // <nav class={openNavbar() ? "activeNav" : "navbar"}>
      <nav className="activeNav">
        <div className="container">
          <div className="top_header_navbar">
            <p>logo</p>
            <CrossIcon height="0.9em" width="0.9em" />
          </div>
          <div className="Header_section_navbar">
            <a className="">{props.headerTitle1}</a>
            <a className="">{props.headerTitle2}</a>
            <a className="">{props.headerTitle3}</a>
            <a className="" href="/gallery">
              {props.headerTitle4}
            </a>
            <a className="">{props.headerTitle5}</a>
          </div>
        </div>
      </nav>
    );
  };

  function Body() {
    return (
      <div className="container sticky">
        <div
          //   onScroll={ChangeBackgroundColor}
          className={
            isScrolled
              ? "Header textcolordark boxshadow"
              : "Header background textcolorlight"
          }
        >
          <a>Logo</a>
          <HambergurMenuIcon height="1em" width="1em" />
          <div
            className={
              isScrolled
                ? "header_content textcolordark"
                : "header_content textcolorlight"
            }
          >
            <a>{props.headerTitle1}</a>
            <a>{props.headerTitle2}</a>
            <a>{props.headerTitle3}</a>
            <a>{props.headerTitle4}</a>
            <a>{props.headerTitle5}</a>
          </div>
        </div>
      </div>
    );
  }

  return <>{openNavbar ? <NavBarMobile /> : <Body />}</>;
};

export default Header;
