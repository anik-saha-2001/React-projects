import Subtotal from "../../components/Subtotal/Subtotal";
import { removeFromCart } from "../../redux/cartAction";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="checkout">
      <div className="checkout-item">
        {cart.cart.map((item, index) => {
          return (
            <div className="checkout-product" key={index}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.rating}</p>
              <p>${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="subtotal">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
