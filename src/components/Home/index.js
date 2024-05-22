import "./index.css";
import Navbar from "../Navbar";
import ProductList from "../ProductList";

const Home = () => (
  <>
    <Navbar />
    <div className="product-page">
      <div className="banner-cont">
        <img
          src="https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg"
          alt="banner"
          className="banner"
        />
      </div>
      <h1 className="product-head">
        Shop Products <span className="head-sp">1077 products</span>
      </h1>
      <ProductList />
    </div>
  </>
);
export default Home;
