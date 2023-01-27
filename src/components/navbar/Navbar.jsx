import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link className="link" to="/">
          <motion.p
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="logo"
          >
            Gharpeti
          </motion.p>
        </Link>
      </div>

      <div className="navbar-center">
        <input
          placeholder="Search rooms by location..."
          className="navbar-search"
          type="search"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="navbar-right">
        <Link className="link" to="/login">
          <button className="navbar-btn login">Login</button>
        </Link>
        <Link className="link" to="register">
          <button className="navbar-btn register">Register</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
