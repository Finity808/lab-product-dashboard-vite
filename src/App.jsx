import React, { useState,useEffect } from "react";
import ProductList from "./components/ProductList";



const initialProducts = [
  { id: 1, name: "Laptop",  price: 999.99, inStock: true },
  { id: 2, name: "Phone",   price: 699.0,  inStock: false },
  { id: 3, name: "Headset", price: 199.99, inStock: true },
  { id: 4, name: "Tablet",  price: 249.5,  inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
useEffect(() => {
  const onMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const angle = 120 + (x - y) * 60;
    document.documentElement.style.setProperty("--angle", `${angle}deg`);
  };
  window.addEventListener("mousemove", onMove);
  return () => window.removeEventListener("mousemove", onMove);
}, []);
  // remove one product by id
  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="diagonal-bg" aria-hidden />

      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
  
};

export default App;
