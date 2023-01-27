import React from "react";
import "./register.scss";
const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <select name="" id="">
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
        </select>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default Register;
