import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function DietairyPreferences({ toggleModal }) {
  const [selectedRestriction, setSelectedRestriction] = useState([]);
  const restrictions = [
    "Vegetarian",
    "Vegan",
    "Gluten Free",
    "Dairy-Free",
    "Nut-Free",
  ];
  const handleRestrictions = (e) => {
    setSelectedRestriction(e.target.value);
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Dietairy Preferences</h2>
          <button onClick={toggleModal}>
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        </div>
        <hr />
        <div className="modal-content flex gap column">
          <div className="flex gap column margin ">
            <div>
              <h3>Dietary Restrictions</h3>
              <hr />
            </div>
            <div className="flex gap wrap padding">
              {restrictions.map((restriction) => {
                return (
                  <div className="flex center gap" key={restriction}>
                    <input
                      onClick={handleRestrictions}
                      value={restriction}
                      type="radio"
                      id={restriction}
                      name="restriction"
                    />
                    <span htmlFor={restriction}>{restriction}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <label htmlFor="allergies-profile">
                Other Allergies (comma separated)
              </label>
              <input
                type="text"
                className="input"
                placeholder="Nuts, Dairy...."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DietairyPreferences;
