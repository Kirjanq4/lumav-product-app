import React from "react";
import "./cart.css";

const Cart = (props) => {
  return (
    <div className="cart-container">
      <h4 className="cart-heading">
        Product in cart: <span className="counter">{props.counter}</span>
      </h4>
      <button
        onClick={() => {
          props.removeFromCart();
        }}
        className="remove-btn"
      >
        Remove from cart
      </button>
    </div>
  );
};

export default Cart;
