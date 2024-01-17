import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPenToSquare, faX } from "@fortawesome/free-solid-svg-icons";

function EditProfile({ toggleEditProfile, user }) {
  const handleClick = () => {
    //   handleProfileChange();
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button onClick={toggleEditProfile}>
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        </div>
        <hr />
        <div className="modal-content flex gap column">
          <div className="flex gap">
            <div className="flex gap center">
              <div className={`profile-image-container hovered`}>
                <img
                  className="recipe-image-medium"
                  src={`${process.env.REACT_APP_BASE_URL}/images/${user.imageUrl}`}
                  alt="profile"
                />
                <div className="overlay" onClick={handleClick}>
                  <div className="pen">
                    <FontAwesomeIcon icon={faPen} size="xs" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  center ">
              <h3 className="color-white">
                {user.firstName + " " + user.lastName}
              </h3>
              <div className="pen-square">
                <button className="btn-menu">
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="color-white" htmlFor="email-profile">
              Email
            </label>
            <input
              type="text"
              className="input"
              disabled
              placeholder={user.email}
              id="email-profile"
            />
          </div>
          <div>
            <label className="color-white" htmlFor="password-profile">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              id="password-profile"
              className="input"
            />
          </div>
          <div className="flex center">
            <button className="btn">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
