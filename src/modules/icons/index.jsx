import React from "react";
import { useCart } from "../../context/CartContext";

const CartIcon = () => {
  const { state } = useCart();

  return (
    <div style={{ position: "fixed", top: "10px", right: "10px" }}>
      <button>Cart ({state.cart.length})</button>
    </div>
  );
};

export default CartIcon;
