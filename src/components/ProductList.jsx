import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  return (
    <>
      {products.filter(p => p.inStock).length === 0 ? (
        <p>No products are in stock right now.</p>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
