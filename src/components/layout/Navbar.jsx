import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../page/Home";
import "../../App";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 text-white text-center">
      <div>
        <h4>icon</h4>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
