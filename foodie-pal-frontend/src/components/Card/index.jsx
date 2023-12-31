import React from "react";
import "./index.css";
import selected from "../../assets/svgs/selected.svg";
import unselected from "../../assets/svgs/unselected.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function Card({ title, imageUrl, calories, time, focus = false }) {
  const cardInfoStyle = {
    backgroundImage: `url(${focus ? selected : unselected})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="card-info flex column center gap " style={cardInfoStyle}>
      <p className="card-title">{title}</p>
      <img src={imageUrl} alt="recipeImage" className="recipe-image" />
      <div className="flex space-between full-width">
        <div className="flex column center time">
          <FontAwesomeIcon icon={faFire} />
          <p>{calories}</p>
        </div>
        <div className="flex column center time">
          <FontAwesomeIcon icon={faClock} />
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
