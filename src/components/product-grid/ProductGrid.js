import React, { useState, useEffect } from "react";
import "./product-grid.css";

const ProductGrid = (props) => {
  return (
    <div>
      {props.products.length > 0
        ? props.products.map((product) => (
            <div key={product.id}>
              <button onClick={() => props.deleteProduct(product.id)}>
                Delete
              </button>
              <div>src={product.image}</div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <button
                onClick={() => {
                  props.addToCart();
                }}
              >
                Add to cart
              </button>
            </div>
          ))
        : "No products"}
    </div>
  );
};

export default ProductGrid;
