import React, { useState } from "react";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Popup from "../../components/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Signup from "../Signup";
import ForgotPassword from "../ForgotPassword";
import { useParams } from "react-router-dom";

import "./index.css";
import ResetPassword from "../ResetPassword";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Load, setLoading] = useState(false);
  const [Register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const { token } = useParams();

  const handleRegister = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setForgotPassword(!forgotPassword);
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await userApi.loginUser({ email, password });
      if (response.token && response.user) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/home");
      } else if (response.message === "Request failed with status code 400") {
        Popup({
          title: "Error",
          text: `Invalid Email or Password`,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        });
      } else if (response.message === "Invalid email") {
        Popup({
          title: "Error",
          text: `Invalid Email`,
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
  const checkIfLoggedIn = async () => {
    if (localStorage.getItem("token")) {
      const response = await userApi.checkIfLoggedIn({
        token: localStorage.getItem("token"),
      });
      if (response.user) {
        navigate("/home");
      }
    } else {
      alert(localStorage.getItem("token"));
    }
  };
  checkIfLoggedIn();
  return (
    <div>
      {Load && <Loading />}
      <div className="image"></div>
      {Register ? (
        <Signup handleRegister={handleRegister} setLoading={setLoading} />
      ) : forgotPassword ? (
        <ForgotPassword />
      ) : token ? (
        <ResetPassword token={token} />
      ) : (
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
      )}
    </div>
  );
}

export default Login;
