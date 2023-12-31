import React, { useEffect } from "react";
import Logo from "../../assets/svgs/Logo.svg";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const selected = () => {
    const url = window.location.pathname;
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
      if (url === item.children[0].pathname) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  };
  const Logout = () => {
    localStorage.clear();
  };
  useEffect(() => {
    selected();
  }, []);
  return (
    <div id="menu" className="menu hidden full-height-screen">
      <div flex center full-width>
        <img src={Logo} alt="logo" className="menu-logo" />
      </div>
      <div className="flex column center gap menu-items">
        <div className="menu-item flex column center ">
          <a href="/home">
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <p>Home</p>
        </div>
        <div className="menu-item flex column center">
          <a href="/favorites">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <p>Fav</p>
        </div>
        <div className="menu-item flex column center">
          <a href="/items">
            <FontAwesomeIcon icon={faBasketShopping} />
          </a>
          <p>Items</p>
        </div>
        <div className="menu-item flex column center">
          <a href="/Diet">
            <FontAwesomeIcon icon={faSeedling} />
          </a>
          <p>Diet</p>
        </div>
        <div className="menu-item flex column center">
          <a href="/profile">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <p>Profile</p>
        </div>
        <div className="menu-item flex column center logout">
          <a href="/" onClick={Logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </a>

          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
