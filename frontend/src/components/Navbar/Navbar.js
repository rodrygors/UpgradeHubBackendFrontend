import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BackFront</div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/invoice">Invoices</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
