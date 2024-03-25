import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-row">
        <img src="/images/logo.png" alt="logo" />
        <h1>Company Name</h1>
      </div>
      <div className="header-row">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

export default Header;
