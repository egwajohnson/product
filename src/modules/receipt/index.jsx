import React from "react";
import { useLocation } from "react-router-dom";
import AppLayout from "../../layout";

const Receipt = () => {
  const { state } = useLocation();
  const { cart, total, transactionId } = state;

  return (
    <AppLayout>
      <div className="center">
        <div className="rept">
          <h2>Payment Receipt</h2>
          <p>Transaction ID: {transactionId}</p>
          <p>Date: {new Date().toLocaleString()}</p>
          <ul>
            {cart.map((item) => (
              <li key={item.Date}>
                {item.title} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => window.print()}>Print Receipt</button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Receipt;
