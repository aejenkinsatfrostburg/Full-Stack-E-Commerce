import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import { Item } from '../Items/Item';

export const RelatedProducts = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from backend
    fetch('http://localhost:4000/allproducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  if (!product) return <p>Loading...</p>;

  // Filter related products by category
  const related = products
    .filter(item => item.category.toLowerCase() === product.category.toLowerCase() && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.length > 0 ? (
          related.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No related products available.</p>
        )}
      </div>
    </div>
  );
};
