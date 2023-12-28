import React, { useState } from "react";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Popup from "../../components/Popup";
import { variables } from "./variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Load, setLoading] = useState(false);
  const [Register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleRegister = () => {
    setRegister(!Register);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await userApi.loginUser({ email, password });
      if (response.token && response.user) {
        navigate("/home");
      } else if (response.message === "Request failed with status code 400") {
        Popup({
          title: "Error",
          text: `Invalid Email or Password`,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        });
      } else {
        Popup({
          title: "Error",
          text: `Something went wrong`,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div>
      {Load && <Loading />}

      <div className="image"></div>

      <div className="flex column gap center login full-height">
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="input"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
        </div>
        <div className="flex column gap">
          <div className="flex center">
            <div>
              {showPassword ? (
                <input
                  type="text"
                  placeholder="Password"
                  className="input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                <input
                  type="password"
                  placeholder="Password"
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

          <div className="flex right ">
            <a href="/" className="link" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="flex column gap">
          <div>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="flex right">
            <span className="span">
              don't have an account?{" "}
              <a href="/" className="link" onClick={handleRegister}>
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
