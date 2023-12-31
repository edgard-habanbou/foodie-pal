import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Popup from "../../components/Popup";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";

function ResetPassword({ token }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleReset = async () => {
    try {
      const response = await userApi.resetPassword({ password, token });
      if (response.message === "password reset successfully") {
        Popup({
          title: "Success",
          text: `Password reset successful`,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        }).then(() => navigate("/"));
      } else {
        Popup({
          title: "Error",
          text: `Password reset failed`,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkToken = async () => {
    try {
      const response = await userApi.checkToken({ token });
      if (response.message !== "token is valid") {
        navigate("/");
      }
    } catch (error) {
      Popup({
        title: "Error",
        text: `Invalid Token`,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FE8A01",
      });
      console.log(error);
    }
  };
  checkToken();
  return (
    <div className="flex column gap center login full-height">
      <div>
        <h2>Reset Password</h2>
      </div>

      <div className="flex column gap">
        <div className="flex center">
          <div>
            {showPassword ? (
              <input
                type="text"
                placeholder="New Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <input
                type="password"
                placeholder="New Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          </div>
          <div>
            {!showPassword ? (
              <FontAwesomeIcon
                className="password-icon"
                onClick={handleShowPassword}
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                className="password-icon"
                icon={faEyeSlash}
                onClick={handleShowPassword}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex column gap">
        <div>
          <button className="btn" onClick={handleReset}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
