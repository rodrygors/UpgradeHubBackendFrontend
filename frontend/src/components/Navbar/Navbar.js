import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/invoice">Invoices</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
