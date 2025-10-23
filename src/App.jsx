import React, { useState } from "react";
import ProductList from "./components/ProductList";

const initialProducts = [
  { id: 1, name: "Laptop",  price: 999.99, inStock: true },
  { id: 2, name: "Phone",   price: 699.0,  inStock: false },
  { id: 3, name: "Headset", price: 199.99, inStock: true },
  { id: 4, name: "Tablet",  price: 249.5,  inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  // remove one product by id
  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
};

export default App;
