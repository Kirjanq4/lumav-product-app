import React, { useState } from "react";

import "./App.css";

import Form from "./components/form/Form";
import ProductGrid from "./components/product-grid/ProductGrid";
import Cart from "./components/cart/Cart";

function App() {
  const productData = [
    {
      id: 1,
      image: "https://picsum.photos/200",
      name: "Table",
      price: 200,
    },
    {
      id: 2,
      image: "https://picsum.photos/200",
      name: "Chair",
      price: 100,
    },
  ];

  const [products, setProducts] = useState(productData);
  const [counter, setCounter] = useState(0);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addToCart = () => {
    setCounter(counter + 1);
  };

  const removeFromCart = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <header className="App-header">
        <h1>Product App</h1>
      </header>
      <div className="form-container">
        <Form addProduct={addProduct} />
        <Cart counter={counter} removeFromCart={removeFromCart} />
      </div>
      <ProductGrid
        products={products}
        deleteProduct={deleteProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
