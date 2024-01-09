import React, { useState } from "react";
import "./index.css";
import selected from "../../assets/svgs/selected.svg";
import unselected from "../../assets/svgs/unselected.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function Card({ title, imageUrl, calories, time, description }) {
  const [focus, setFocus] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const cardInfoStyle = {
    backgroundImage: `url(${focus ? selected : unselected})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handleCardClick = () => {
    setFocus(!focus);
    setShowDescription(!showDescription);
  };
  return (
    <div>
      <div
        className="card-info flex column center gap "
        onClick={handleCardClick}
        style={cardInfoStyle}
      >
        <div>
          <img src={imageUrl} alt="recipeImage" className="recipe-image" />
        </div>
        <div className="card-title">
          <p>{title}</p>
        </div>
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
      {showDescription && (
        <div className="description">
          <h1>{description}</h1>
        </div>
      )}
    </div>
  );
}

export default Card;
