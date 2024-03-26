import React from "react";
import ProductItem from "./ProductItem"; // Adjust the path as needed
import products from "../data/products.js";

function ProductList({ cart }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} cart={cart} />
      ))}
    </div>
  );
}

export default ProductList;
