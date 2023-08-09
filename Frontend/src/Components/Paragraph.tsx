import "./Css/Paragraph.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";

interface propstype {
  paragraph: string;
}

const Paragraph = (props: propstype) => {
  return (
    <div>
      <p className="container paragraph">
        {props.paragraph}
        <br />
        <a>Read More</a>
      </p>
    </div>
  );
};

export default Paragraph;
