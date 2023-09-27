import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import ObjectiveSection from "../Components/ObjectiveSection";
const Homepage = () => {
  return (
    <>
      <Header textcolor="textcolorlight" />
      <Hero />
      <Paragraph>
        <div className="LargePadding">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
          <a>Readmore</a>
        </div>
      </Paragraph>
      <ObjectiveSection />
    </>
  );
};

export default Homepage;
