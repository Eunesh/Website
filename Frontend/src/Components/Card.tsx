import "./Css/Card.css";
import "../GlobalCss/Style.css";

interface propstype {
  src: string;
}
const Card = (props: propstype) => {
  return (
    <div className="card_wrap">
      <img
        src={props.src}
        loading="lazy"
        className="member_image"
        alt="member image"
      />
      <h3>Member Name</h3>
      <p>Executive Member</p>
      <div>---------------</div>
    </div>
  );
};

export default Card;
