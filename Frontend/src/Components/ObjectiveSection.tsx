import { useState } from "react";
import "../GlobalCss/util.css";
import "./Css/ObjectiveSection.css";

const ObjectiveSection = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [frontArrowcount, setFrontArrowcount] = useState(0);
  const [backArrowcount, setBackArrowcount] = useState(0);

  const HandleFrontArrow = () => {
    setIsHidden(true);

    if (frontArrowcount < 4) {
      setFrontArrowcount((count) => count + 1);
    }
  };

  const HandleBackArrow = () => {
    setIsHidden(false);

    switch (frontArrowcount) {
      case 1:
        setBackArrowcount(4);
        setFrontArrowcount((count) => count - 1);
        break;
      case 2:
        setBackArrowcount(3);
        setFrontArrowcount((count) => count - 1);
        break;
      case 3:
        setBackArrowcount(2);
        setFrontArrowcount((count) => count - 1);
        break;
      case 4:
        setBackArrowcount(1);
        setFrontArrowcount((count) => count - 1);
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="objective">
          <div className="">
            <h2 className="text smoothed">Our Objectives</h2>
          </div>
          <div className="flex_row">
            <div
              className={
                isHidden
                  ? `card_objective visible_card_${frontArrowcount}`
                  : `card_objective backscroll_card_${backArrowcount}`
              }
            >
              <div className="flex_column">
                <h2 className="titile_font smoothed">
                  Literacy and Child Education
                </h2>
                <p>
                  Collaborating with government and non-government organizations
                  to empower illiterate individuals and provide essential
                  education services to underprivileged children.
                </p>
              </div>
            </div>
            <div
              className={
                isHidden
                  ? `card_objective visible_card_${frontArrowcount}`
                  : `card_objective backscroll_card_${backArrowcount}`
              }
            >
              <div className="flex_column">
                <h2 className="titile_font smoothed">Skill Development</h2>
                <p>
                  Addressing our nation's poverty, this organization
                  collaborates with government and non-government entities to
                  uplift unskilled and semi-skilled labor into skilled workers,
                  contributing to poverty reduction.
                </p>
              </div>
            </div>
            <div
              className={
                isHidden
                  ? `card_objective visible_card_${frontArrowcount}`
                  : `card_objective backscroll_card_${backArrowcount}`
              }
            >
              <div className="flex_column">
                <h2 className="titile_font smoothed">Healthcare</h2>
                <p>
                  Delivering free medicines for snake bites, raising awareness
                  through campaigns, offering rabies control medication.
                </p>
              </div>
            </div>
            <div
              className={
                isHidden
                  ? `card_objective visible_card_${frontArrowcount}`
                  : `card_objective backscroll_card_${backArrowcount}`
              }
            >
              <div className="flex_column">
                <h2 className="titile_font smoothed">Preserve Heritage </h2>
                <p>
                  Launching initiatives in collaboration with cooperative
                  organizations to safeguard and conserve our nation's cultural
                  heritage and tourist attractions.
                </p>
              </div>
            </div>
            <div
              className={
                isHidden
                  ? `card_objective visible_card_${frontArrowcount}`
                  : `card_objective backscroll_card_${backArrowcount}`
              }
            >
              <div className="flex_column">
                <h2 className="titile_font smoothed">Awareness Program</h2>
                <p>
                  Implementing Awareness Initiatives with Local Government
                  Support to Combat Drug-Related Issues.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Icon_section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2.5em"
            className="Icon"
            viewBox="0 0 448 512"
            onClick={HandleBackArrow}
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2.5em"
            viewBox="0 0 448 512"
            className="Icon"
            onClick={HandleFrontArrow}
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveSection;
