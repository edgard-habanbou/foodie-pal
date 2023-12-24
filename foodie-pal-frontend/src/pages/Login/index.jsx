import React, { useState } from "react";
import { userApi } from "../../network/axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await userApi.loginUser({ email, password });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
