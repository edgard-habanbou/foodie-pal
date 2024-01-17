import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function EditProfile({ toggleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button onClick={toggleModal}>
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        </div>
        <hr />
        <div className="modal-content flex gap column">
          <h1>Modal Content</h1>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
