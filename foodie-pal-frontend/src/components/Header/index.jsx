import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header() {
  const userImage = JSON.parse(localStorage.getItem("user")).imageUrl;
  const showMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("showing");
    menu.classList.toggle("hidden");
  };
  return (
    <div className="header flex space-between center">
      <button onClick={showMenu} className="btn-menu">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>
      <div>
        <a href="/profile">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/images/` + userImage}
            alt="userImage"
            className="user-image"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
