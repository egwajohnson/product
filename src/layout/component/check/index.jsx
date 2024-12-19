import React from "react";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayNow = () => {
    const transactionId = Math.random().toString(36).substr(2, 9);
    navigate("/receipt", { state: { cart: state.cart, total, transactionId } });
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="check">
      <div className="checkin">
        <h2>Checkout</h2>
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity}
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id: item.id },
                  })
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={handlePayNow}>Pay Now</button>
      </div>
    </div>
  );
};

export default Checkout;
