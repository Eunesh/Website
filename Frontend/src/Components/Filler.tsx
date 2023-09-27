import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/FIller.css";

interface propsType {
  height: string;
}

const Filler = (props: propsType) => {
  return <div className={`filler lightbackground ${props.height}`}></div>;
};

// #0d0d0d

export default Filler;
