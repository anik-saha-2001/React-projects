import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartAction";

const Product = ({ id, title, price, rating, image }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <img src={image} alt="image" />
      <div className="product-end">
        <h4>{title}</h4>
        <p>{rating}</p>
        <p>${price}</p>
        <button
          onClick={() => dispatch(addToCart(id, title, price, rating, image))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
