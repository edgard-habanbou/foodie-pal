import React, { useState } from "react";
import { userApi } from "../../network/axios";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function DietairyPreferences({ toggleModal, handleDelete }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedRestriction, setSelectedRestriction] = useState(
    user.DietairyPreferences[0].restrictions || ""
  );
  const [allergies, setAllergies] = useState(
    user.DietairyPreferences[0].allergies || ""
  );
  const [selectedCuisine, setSelectedCuisine] = useState(
    user.DietairyPreferences[0].cuisinePreferences || ""
  );
  const [SelectedFlavors, setSelectedFlavors] = useState(
    user.DietairyPreferences[0].flavorPreferences || []
  );
  const handleSave = async () => {
    const data = {
      subDocument: {
        DietairyPreferences: {},
      },
    };
    if (selectedRestriction !== "") {
      data.subDocument.DietairyPreferences.restrictions = selectedRestriction;
    }

    if (allergies !== "") {
      data.subDocument.DietairyPreferences.allergies = allergies;
    }
    if (selectedCuisine !== "") {
      data.subDocument.DietairyPreferences.cuisinePreferences = selectedCuisine;
    }

    if (SelectedFlavors.length > 0) {
      data.subDocument.DietairyPreferences.flavorPreferences = SelectedFlavors;
    }

    const updatedUser = await userApi.updateUser(data);
    localStorage.setItem("user", JSON.stringify(updatedUser.updatedUser));
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
    setSelectedRestriction(e);
  };
  const flavorPreferences = ["Spicy", "Sweet", "Savory", "Bitter"];
  const handleFlavorPreferences = (e) => {
    const flavor = e.target.value;
    if (e.target.checked) {
      if (!SelectedFlavors.includes(flavor)) {
        setSelectedFlavors([...SelectedFlavors, flavor]);
      }
    } else {
      const updatedFlavors = SelectedFlavors.filter((item) => item !== flavor);
      setSelectedFlavors(updatedFlavors);
    }
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
                        onClick={() => handleRestrictions(restriction)}
                        value={restriction}
                        type="radio"
                        {...(selectedRestriction === restriction && {
                          checked: true,
                        })}
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
                        {...(SelectedFlavors.includes(flavor) && {
                          checked: true,
                        })}
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
