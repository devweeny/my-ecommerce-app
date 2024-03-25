import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Cart from "./Cart";

function Productpage() {
  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td>
            <ProductList />
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Cart />
          </td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
