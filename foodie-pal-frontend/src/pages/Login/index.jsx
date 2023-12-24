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
      if (response.token && response.user) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
