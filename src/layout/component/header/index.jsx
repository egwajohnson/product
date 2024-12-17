import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
