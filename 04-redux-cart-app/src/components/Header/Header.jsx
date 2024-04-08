import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>Home</h2>
      </Link>
      <div className="header-end">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <span className="cart-link">
            Cart <strong>{cart.cart.length}</strong>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
