import products from "../data/products.js";

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
        <img src={product.image} alt={product.id + "'s image"} />
          <p>{product.name}</p>
          <p>Price: {'$' + product.price}</p>
          <button>Add to Cart</button>
        </div>
        ))}
    </div>
  );
}

export default ProductList;
