import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../network/axios";
import Popup from "../../components/Popup";

function Login({ handleRegister, handleForgotPasswordBtn, setLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
  return (
    <div>
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
            <a href="/" className="link" onClick={handleForgotPasswordBtn}>
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
