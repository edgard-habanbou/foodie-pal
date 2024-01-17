import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function DietairyPreferences({ toggleModal, handleDelete }) {
  const [selectedRestriction, setSelectedRestriction] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [SelectedFlavors, setSelectedFlavors] = useState([]);
  const handleSave = () => {
    toggleModal();
  };
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
  const flavorPreferences = ["Spicy", "Sweet", "Savory", "Bitter"];
  const handleFlavorPreferences = (e) => {
    setSelectedFlavors([...SelectedFlavors, e.target.value]);
  };
  const handleCuisinePreferences = (e) => {
    setSelectedCuisine(e.target.value);
  };
  const handleAllergies = (e) => {
    setAllergies(e.target.value);
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
            <div className="flex column gap">
              <div className="width-fit">
                <label htmlFor="flavor">Dietary Restrictions</label>
                <hr />
              </div>
              <div className="flex gap wrap ">
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
            </div>
            <div className="flex column gap">
              <div className="width-fit">
                <label htmlFor="allergies-profile">Other Allergies</label>
                <hr />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Nuts, Dairy...."
                value={allergies}
                onChange={handleAllergies}
              />
            </div>
          </div>
          <div className="flex gap column margin">
            <div className="flex gap column">
              <div className="width-fit">
                <label htmlFor="cuisine-profile">Cuisine Preferences</label>
                <hr />
              </div>
              <input
                type="text"
                className="input"
                placeholder="e.g., Italian, Asian, Mediterranean"
                value={selectedCuisine}
                onChange={handleCuisinePreferences}
              />
            </div>
            <div className="flex column gap">
              <div className="width-fit">
                <label htmlFor="flavor">Flavor Preferences</label>
                <hr />
              </div>
              <div id="flavor" className="flex wrap gap">
                {flavorPreferences.map((flavor) => {
                  return (
                    <div className="flex center gap" key={flavor}>
                      <input
                        onClick={handleFlavorPreferences}
                        value={flavor}
                        type="checkbox"
                        id={flavor}
                        name="flavor"
                      />
                      <span htmlFor={flavor}>{flavor}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap center margin">
            <button className="btn" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn danger"
              onClick={() => handleDelete("preferences")}
            >
              Delete Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DietairyPreferences;
