import React from "react";
import { useLocation } from "react-router-dom";

const Receipt = () => {
  const { state } = useLocation();
  const { cart, total, transactionId } = state;

  return (
    <div>
      <h2>Payment Receipt</h2>
      <p>Transaction ID: {transactionId}</p>
      <p>Date: {new Date().toLocaleString()}</p>
      <ul>
        {cart.map((item, next) => (
          <li key={item.Date}>
            {item.title} - ${item.price} x {item.quantity + next}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => window.print()}>Print Receipt</button>
    </div>
  );
};

export default Receipt;
