import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const initialFormState = {
    id: null,
    image: "",
    name: "",
    price: 0,
  };

  const [product, setProduct] = useState(initialFormState);
  const [imageValidation, setImageValidation] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!product.image) {
            setImageValidation(true);
          }
          if (!product.name) {
            setNameValidation(true);
          }

          props.addProduct(product);
          setProduct(initialFormState);
        }}
        className="form"
      >
        <h2>Add Product</h2>
        <input
          className="input-item"
          type="text"
          name="image"
          value={product.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        {imageValidation ? <span>Fill out image url</span> : null}
        <input
          className="input-item"
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        {nameValidation ? <span>Fill out name</span> : null}
        <input
          className="input-item"
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
