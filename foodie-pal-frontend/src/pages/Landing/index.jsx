import React from "react";
import Menu from "../../components/Menu";

function Landing() {
  return (
    <div className="flex ">
      <div>
        <Menu />
      </div>
      <div className="landing">
        <h1>Landing</h1>
      </div>
    </div>
  );
}

export default Landing;
