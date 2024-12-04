import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
      <NavLink to="/signout">Sign out</NavLink>
    </nav>
  );
}

export default Navigation;
