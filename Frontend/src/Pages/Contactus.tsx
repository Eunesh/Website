import "../GlobalCss/util.css";
import Filler from "../Components/Filler";
// import Title from "../Components/Title";
import Header from "../Components/Header";
import "../Components/Css/ContactusForm.css";
import ContactusForm from "../Components/ContactusForm";

const Contactus = () => {
  function PhoneIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.5em"
        viewBox="0 0 512 512"
        className="PhoneIcon"
      >
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
      </svg>
    );
  }
  return (
    <>
      <Header textcolor="textcolordark" />
      <Filler height="fillerextralarge" />
      <div className="">
        <div className="black_background">
          <div className="container flexbox">
            <div className="contactusrow">
              <PhoneIcon />
              <h1 className="Contactus_text">CALL US</h1>
            </div>
            <p className="Contactus_text">+9779823665366</p>
          </div>
        </div>
        <ContactusForm />
      </div>
    </>
  );
};

export default Contactus;
