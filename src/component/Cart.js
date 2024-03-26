import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function Cart({ cart }) {
  const [cartItems] = cart;
  const [total, setTotal] = useState(calculateTotal(cartItems));

  useEffect(() => {
    setTotal(calculateTotal(cartItems));
  }, [cartItems]);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem
          key={item[0].id}
          product={item[0]}
          quantity={item[1]}
          cart={cart}
        />
      ))}

      <p>Total (in cart): {"$" + total.toFixed(2)}</p>
    </div>
  );
}

const calculateTotal = (cartItems) => {
  let total = 0;
  if (cartItems.length === 0) {
    return total;
  }
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i][0].price * cartItems[i][1];
  }
  return total;
};

export default Cart;
