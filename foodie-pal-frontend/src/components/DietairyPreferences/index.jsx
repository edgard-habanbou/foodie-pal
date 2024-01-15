import React from "react";
import "./index.css";
function DietairyPreferences({ toggleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button onClick={toggleModal}>&times;</button>
        </div>
        <div className="modal-content">
          <p>Modal content</p>
        </div>
      </div>
    </div>
  );
}

export default DietairyPreferences;
