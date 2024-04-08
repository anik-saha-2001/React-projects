import "./Home.css";
import Product from "../Product/Product";
import Image1 from "../../assets/product1.jpeg";
import Image2 from "../../assets/product2.jpeg";
import Image3 from "../../assets/product3.jpeg";
import Image4 from "../../assets/product4.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Product
          id="1"
          title="Apple IMac"
          price="1800"
          rating="⭐⭐⭐⭐⭐"
          image={Image1}
        />
        <Product
          id="2"
          title="Iphone 15"
          price="1500"
          rating="⭐⭐⭐⭐"
          image={Image2}
        />
      </div>
      <div>
        <Product
          id="3"
          title="Apple Watch"
          price="800"
          rating="⭐⭐⭐"
          image={Image3}
        />
        <Product
          id="4"
          title="Ipad 15"
          price="1200"
          rating="⭐⭐⭐⭐"
          image={Image4}
        />
      </div>
    </div>
  );
};

export default Home;
