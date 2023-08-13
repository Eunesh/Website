import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import "./Css/Title.css";

interface propstype {
  title: string;
}

const Title = (props: propstype) => {
  return (
    <div className=" container title_wrapper">
      <h1>
        {props.title}
        <div className="Underline"></div>
      </h1>
    </div>
  );
};

export default Title;
