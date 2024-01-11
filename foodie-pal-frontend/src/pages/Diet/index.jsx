import React from "react";
import Nav from "../../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Diet() {
  const showMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("showing");
    menu.classList.toggle("hidden");
  };
  return (
    <div className="flex background">
      <div>
        <Nav />
      </div>
      <div className="landing">
        <button onClick={showMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Diet</h1>
      </div>
    </div>
  );
}

export default Diet;
