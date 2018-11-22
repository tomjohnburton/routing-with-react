import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <NavLink activeClassName="gold" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
