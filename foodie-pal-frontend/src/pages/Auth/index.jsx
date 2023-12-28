import React, { useState } from "react";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Signup from "../Signup";
import Login from "../Login";
import ForgotPassword from "../ForgotPassword";
import { useParams } from "react-router-dom";

import "./index.css";
import ResetPassword from "../ResetPassword";

function Auth() {
  const [Load, setLoading] = useState(false);
  const [Register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();

  const { token } = useParams();

  const handleRegister = (e) => {
    e.preventDefault();
    setRegister(!Register);
  };

  const handleForgotPasswordBtn = (e) => {
    e.preventDefault();
    setForgotPassword(!forgotPassword);
  };

  const checkIfLoggedIn = async () => {
    if (localStorage.getItem("token")) {
      const response = await userApi.checkIfLoggedIn({
        token: localStorage.getItem("token"),
      });
      if (response.user) {
        navigate("/home");
      }
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
        <ForgotPassword handleForgotPasswordBtn={handleForgotPasswordBtn} />
      ) : token ? (
        <ResetPassword token={token} />
      ) : (
        <Login
          handleRegister={handleRegister}
          handleForgotPasswordBtn={handleForgotPasswordBtn}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default Auth;
