import "../GlobalCss/util.css";
import "./Css/ObjectiveSection.css";

const ObjectiveSection = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="objective">
          <div className="">
            <h2 className="text smoothed">Our Objectives</h2>
          </div>
          <div className="flex_row">
            <div className="card_objective">
              <h2>Objective 1</h2>
            </div>
            <div className="card_objective">
              <h2>Objective 2</h2>
            </div>
            <div className="card_objective">
              <h2>Objective 3</h2>
            </div>
          </div>
          {/* <div className="card_objective">
            <h2>Objective 1</h2>
          </div>
          <div className="card_objective">
            <h2>Objective 1</h2>
          </div>
          <div className="card_objective">
            <h2>Objective 1</h2>
          </div> */}
        </div>
        <div>emoji</div>
      </div>
    </div>
  );
};

export default ObjectiveSection;
