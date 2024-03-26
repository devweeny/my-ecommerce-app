import React, { useState } from 'react';

function ProductItem({ product, addToCart }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => setShowDescription(true);
  const handleMouseLeave = () => setShowDescription(false);

  return (
    <div key={product.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={product.image} alt={product.id + "'s image"}/>
      <p>{product.name}</p>
      <p>Price: {'$' + product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {showDescription && <p>{product.description}</p>}
    </div>
  );
}

export default ProductItem;
