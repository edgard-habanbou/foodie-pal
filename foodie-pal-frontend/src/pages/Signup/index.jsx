import React, { useState } from "react";
import { userApi } from "../../network/axios";
import Popup from "../../components/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Signup({ handleRegister, setLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGender = (e) => {
    if (e.target.value === "male") setGender(0);
    else setGender(1);
  };
  const handleSignup = async () => {
    setLoading(true);
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      gender === ""
    ) {
      Popup({
        title: "Error",
        text: `Please fill all the fields`,
        icon: "error",
        confirmButtonText: "Ok",
      });
      setLoading(false);
      return;
    }
    try {
      const response = await userApi.registerUser({
        email,
        password,
        gender,
        firstName,
        lastName,
      });
      if (response.message === "user created successfully") {
        Popup({
          title: "Success",
          text: `Congratulations! You have successfully registered to Foodie Pal.
          Please login to continue`,
          icon: "success",
          confirmButtonText: "Ok",
        });

        handleRegister();
      } else if (response.response.data.error.code === 11000) {
        Popup({
          title: "Error",
          text: `Email already exists`,
          icon: "error",
          confirmButtonText: "Ok",
        });
        setLoading(false);
      } else {
        Popup({
          title: "Error",
          text: response.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
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
          <h2>Sign Up</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="input"
            onChange={(e) =>
              setFirstName(
                e.target.value.toLowerCase().charAt(0).toUpperCase() +
                  e.target.value.slice(1)
              )
            }
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            onChange={(e) =>
              setLastName(
                e.target.value.toLowerCase().charAt(0).toUpperCase() +
                  e.target.value.slice(1)
              )
            }
          />
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
        </div>
        <div className="flex gap column">
          <div>
            <span>Gender</span>
          </div>
          <div className="flex gap">
            <div className="flex center ">
              <input
                onClick={handleGender}
                value="male"
                type="radio"
                id="male"
                name="gender"
              />
              <span htmlFor="male"> Male</span>
            </div>
            <div className="flex center ">
              <input
                onClick={handleGender}
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              <span htmlFor="female">Female</span>
            </div>
          </div>
        </div>

        <div className="flex column gap">
          <div>
            <button className="btn" onClick={handleSignup}>
              Create Account
            </button>
          </div>
          <div className="flex right">
            <span className="span">
              Already a member?{" "}
              <a href="/" className="link" onClick={handleRegister}>
                Log In
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
