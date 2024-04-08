import "./Subtotal.css";
import { useSelector } from "react-redux";
import { getTotal } from "../../redux/cartReducer";

const Subtotal = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="subtotal-area">
      <h3>
        Subtotal ({cart.cart.length} items): ${getTotal(cart.cart)}
      </h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
