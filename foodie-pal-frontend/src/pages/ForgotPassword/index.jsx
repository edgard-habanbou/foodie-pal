import React, { useState } from "react";
import Popup from "../../components/Popup";
import { userApi } from "../../network/axios";
import Loading from "../../components/Loading";
import SwiperAuto from "../../components/SwiperAuto";
import { useEffect } from "react";
import texts from "../Login/texts";
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex login full-height   center ">
        {screenWidth > 950 && (
          <div className="image-sidebar flex center">
            <div className="margin padding flex center full-width">
              <SwiperAuto texts={texts} />
            </div>
          </div>
        )}
        <div className="flex login-form full-height center ">
          <div className="flex column center gap">
            <div className="flex column gap form-control">
              <h2>Forgot Password</h2>
              <input
                type="text"
                className="input"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value.toLowerCase());
                }}
              />
            </div>
            <button
              type="submit"
              className="btn"
              onClick={handleForgotPassword}
            >
              Send Link
            </button>
            <div className="flex full-width right">
              <span className="span">
                Changed your mind?
                <a href="/" className="link" onClick={handleForgotPasswordBtn}>
                  Log In
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {Load && <Loading />}
    </>
  );
};

export default ForgotPassword;
