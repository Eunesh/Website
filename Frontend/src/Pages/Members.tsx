import Header from "../Components/Header";
import "./PageCss/Tabs.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import ExecutiveMembers from "../Components/ExecutiveMembers";
import { NonExecitiveMembers } from "../Components/NonExecitiveMembers";
// import Title from "../Components/Title";
import Filler from "../Components/Filler";
import { useState } from "react";
const Members = () => {
  const [tabActiveExeMem, setTabActiveExeMem] = useState(true);
  const [tabActiveNonExeMem, setTabActiveNonExeMem] = useState(false);

  function ClickedTabExeMem() {
    setTabActiveExeMem(true);
    setTabActiveNonExeMem(false);
  }

  function ClickedTabNonExeMem() {
    setTabActiveNonExeMem(true);
    setTabActiveExeMem(false);
  }
  return (
    <>
      <Header textcolor="textcolordark" />
      <Filler height="fillersmall" />
      <div className="container">
        <div className="tabs_block">
          <div
            className={tabActiveExeMem ? "members" : ""}
            onClick={ClickedTabExeMem}
          >
            <p className="font"> Executive Members</p>
          </div>
          <div
            className={tabActiveNonExeMem ? "members" : ""}
            onClick={ClickedTabNonExeMem}
          >
            <p className="font"> Non Executive Members</p>
          </div>
        </div>
        {tabActiveExeMem && !tabActiveNonExeMem ? (
          <ExecutiveMembers />
        ) : (
          <NonExecitiveMembers />
        )}
      </div>
    </>
  );
};

export default Members;
