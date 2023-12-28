import axios from "axios";
import React, { useState } from "react";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    axios
      .post("http://192.168.2.9:8000/auth/forgot-password", {
        email: email,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div className="login">
      <div className="flex column gap">
        <h1>Forgot Password</h1>
        <input
          type="text"
          className="input"
          placeholder="Email Address"
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase());
          }}
        />
        <button type="submit" className="btn" onClick={handleForgotPassword}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
