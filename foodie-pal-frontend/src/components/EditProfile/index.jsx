import React from "react";
import "./index.css";

function EditProfile() {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
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
