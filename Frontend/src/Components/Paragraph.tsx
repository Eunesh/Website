import "./Css/Paragraph.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";

// interface propstype {
//   paragraph: string;
// }

const Paragraph = ({ children }) => {
  return (
    <div>
      <p className="container paragraph">
        {children}
        <br />
      </p>
    </div>
  );
};

export default Paragraph;
