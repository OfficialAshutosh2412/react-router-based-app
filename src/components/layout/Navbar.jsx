import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../page/Home";
import "../../App";

const Navbar = () => {
  return (
    <nav className="flex w-full bg-white justify-between align-middle items-center pt-0 pb-0 p-16 fixed">
      <div className="pl-4">
        <img src="/logo.jpg" alt="logo" width="70px" />
      </div>
      <ul className="flex gap-5 pr-4">
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
