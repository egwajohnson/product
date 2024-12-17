import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/" className="a">Home</Link>
          </li>
          <li>
            <Link to="/checkout" className="a">Checkout</Link>
          </li>
          <li>
            <Link to="/list" className="a">ProductList</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
