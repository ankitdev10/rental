import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
