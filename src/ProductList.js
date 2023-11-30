// src/ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  // State for storing the list of products
  const [products, setProducts] = useState([]);

  // State for toggling the display of product descriptions
  const [showDescriptions, setShowDescriptions] = useState(false);

  // Fetch products from the mock API when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products from the mock API
  const fetchProducts = async () => {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      // Limiting to first 5 for simplicity
      setProducts(data.slice(0, 5));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to handle the toggle of product descriptions
  const handleToggleDescriptions = () => {
    setShowDescriptions(!showDescriptions);
  };

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleToggleDescriptions}>
        {showDescriptions ? 'Hide Descriptions' : 'Show Descriptions'}
      </button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            {/* Conditionally render the description based on showDescriptions state */}
            {showDescriptions && <p>{product.description}</p>}
            <button onClick={() => alert(`Added "${product.name}" to cart!`)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
