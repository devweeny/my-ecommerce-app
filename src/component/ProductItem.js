import React, { useState } from "react";

function ProductItem({ product, cart }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => setShowDescription(true);
  const handleMouseLeave = () => setShowDescription(false);
  const [cartItems, setCartItems] = cart;

  return (
    <div
      key={product.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.image} alt={product.id + "'s image"} />
      <p>{product.name}</p>
      <p>Price: {"$" + product.price}</p>
      <button onClick={() => addToCart(product, cartItems, setCartItems)}>
        Add to Cart
      </button>
      {showDescription && <p>{product.description}</p>}
    </div>
  );
}

function addToCart(product, cartItems, setCartItems) {
  if (cartItems.length === 0) {
    setCartItems([[product, 1]]);
    return;
  }
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i][0].id === product.id) {
      cartItems[i][1]++;
      setCartItems([...cartItems]);
      return;
    } else {
      setCartItems([...cartItems, [product, 1]]);
    }
  }
}

export default ProductItem;
