function CartItem({ product, quantity, cart }) {
  const [cartItems, setCartItems] = cart;

  return (
    <div>
      <img src={product.image} alt={product.id + "'s image"} />
      <p>{product.name}</p>
      <p>Price: {"$" + product.price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {"$" + quantity * product.price}</p>
      <button onClick={() => removeFromCart(product, cartItems, setCartItems)}>
        Remove
      </button>
    </div>
  );
}

function removeFromCart(product, cartItems, setCartItems) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i][0].id === product.id) {
      if (cartItems[i][1] === 1) {
        cartItems.splice(i, 1);
      } else {
        cartItems[i][1]--;
      }
      setCartItems([...cartItems]);
      return;
    }
  }
}

export default CartItem;
