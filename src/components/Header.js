import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <ul>
        <NavLink activeClassName="selected" to="/" exact={true}>
          home
        </NavLink>
        <NavLink activeClassName="selected" to="/cart">
          cart
        </NavLink>
        <NavLink activeClassName="selected" to="/contacts">
          contacts
        </NavLink>
      </ul>
    </header>
  </div>
);

export default Header;
