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
          {/* <Route path="/receipt" element={<Receipt />} /> */}
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
