import React, { useState } from "react";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Popup from "../../components/Popup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Load, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await userApi.loginUser({ email, password });
      console.log(response.message);
      if (response.token && response.user) {
        navigate("/home");
      } else if (response.message === "Request failed with status code 400") {
        Popup({
          title: "Error",
          text: "Invalid Credentials",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        });
      } else {
        Popup({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#FE8A01",
        });
      }
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div className="flex column gap  full-height">
      {Load && <Loading />}
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
      <div>
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
