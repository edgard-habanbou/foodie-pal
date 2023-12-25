import React, { useState } from "react";
import { userApi } from "../../network/axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await userApi.loginUser({ email, password });
      console.log(response);
      if (response.token && response.user) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex column gap  full-height">
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
