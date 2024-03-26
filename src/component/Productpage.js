import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Cart from "./Cart";
import { useState } from "react";

function Productpage() {
  const [cart, setCart] = useState([]);

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td>
            <ProductList cart={[cart, setCart]} />
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Cart cart={[cart, setCart]} />
          </td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
