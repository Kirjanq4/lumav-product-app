import "./App.css";

import Form from "./components/form/Form";
import Cart from "./components/cart/Cart";
import ProductGrid from "./components/product-grid/ProductGrid";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Product App</h1>
      </header>
      <Form />
      <Cart />
      <ProductGrid />
    </div>
  );
}

export default App;
