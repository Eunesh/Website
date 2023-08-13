import "../GlobalCss/util.css";
import Filler from "../Components/Filler";
// import Title from "../Components/Title";
import Header from "../Components/Header";
import ContactusForm from "../Components/ContactusForm";

const Contactus = () => {
  return (
    <>
      <Header textcolor="textcolordark" />
      <Filler />
      <div className="container">
        <ContactusForm />
      </div>
      {/* <Title title="CONTACT US" /> */}
    </>
  );
};

export default Contactus;
