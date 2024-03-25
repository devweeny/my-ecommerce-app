function Cart() {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {/* <img src="images/product1.png" alt="product 1"/> */}
      <p>Total (in cart): {"$" + 0.00.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
