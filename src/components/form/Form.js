import React, { useState, useEffect } from "react";
import "./form.css";

const Form = (props) => {
  const initialFormState = {
    id: null,
    image: "",
    name: "",
    price: 0,
  };

  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.addProduct(product);
          setProduct(initialFormState);
        }}
      >
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
