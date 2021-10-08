import React from "react";
import "./cart.css";

const Cart = (props) => {
  return (
    <div>
      <div>Product in cart: {props.counter}</div>
      <button
        onClick={() => {
          props.removeFromCart();
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};

export default Cart;
