import React, { useState } from "react";
import Popup from "../../components/Popup";
import { userApi } from "../../network/axios";
import Loading from "../../components/Loading";
const ForgotPassword = ({ handleForgotPasswordBtn }) => {
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
    <div className="flex login full-height gap center column">
      {Load && <Loading />}
      <div className="flex column gap">
        <h2>Forgot Password</h2>
        <input
          type="text"
          className="input"
          placeholder="Email Address"
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase());
          }}
        />
        <button type="submit" className="btn" onClick={handleForgotPassword}>
          Send Link
        </button>
      </div>
      <div className="flex full-width right">
        <span className="span">
          Changed your mind?{" "}
          <a href="/" className="link" onClick={handleForgotPasswordBtn}>
            Log In
          </a>
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
