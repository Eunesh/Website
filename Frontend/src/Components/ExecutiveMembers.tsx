import "./Css/Member.css";
import "../GlobalCss/Style.css";
import MembersImage from "./Images/Profile.png";

import Card from "./Card";

const ExecutiveMembers = () => {
  const MembersDetails = [
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
    {
      membersName: "Ram",
      MembersImage: MembersImage,
      Phonenumber: "98232211",
    },
  ];

  return (
    <div className="card_wrapper">
      {MembersDetails.map((members, index) => {
        return <Card key={index} src={members.MembersImage} />;
      })}
    </div>
  );
};

export default ExecutiveMembers;
