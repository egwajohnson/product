import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./modules/home";
import Checkout from "./layout/component/check";
import Receipt from "./modules/receipt";
import CartIcon from "./modules/icons";
import ProductList from "./modules/list";

function App() {
  return (
    <CartProvider>
      <Router>
        <CartIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
