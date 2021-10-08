import React from "react";
import "./product-grid.css";

const ProductGrid = (props) => {
  return (
    <div className="products-container">
      {props.products.length > 0
        ? props.products.map((product) => (
            <div key={product.id} className="product-container">
              <button
                className="delete-btn"
                onClick={() => props.deleteProduct(product.id)}
              >
                X
              </button>
              <div>
                <img className="product-image" src={product.image} />
              </div>
              <div className="product-name">{product.name}</div>
              <div className="product-price">$ {product.price}</div>
              <button
                className="add-to-cart-btn"
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
