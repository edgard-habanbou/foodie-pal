import React, { useState } from "react";
import Popup from "../../components/Popup";
import { userApi } from "../../network/axios";
import Loading from "../../components/Loading";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [Load, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await userApi.forgotPassword({ email });
    if (res.message === "email sent successfully") {
      Popup({
        title: "Success",
        text: `Email sent`,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FE8A01",
        action: () => {
          window.location.reload();
        },
      });
    } else {
      Popup({
        title: "Error",
        text: `Email not sent`,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FE8A01",
      });
    }
    setLoading(false);
  };

  return (
    <div className="login">
      {Load && <Loading />}
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
