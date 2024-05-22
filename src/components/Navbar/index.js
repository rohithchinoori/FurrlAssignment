import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import "./index.css";

const Navbar = () => (
  <div className="nav">
    <Link to="/">
      <h1 className="logo-head">Furrl</h1>
    </Link>
    <div className="nav-items">
      <a href="https://furrl.in/wishlist">
        <CiBookmark size={20} />
      </a>
      <a href="https://furrl.in/wishlist">
        <BsHandbag size={20} />
      </a>
    </div>
  </div>
);
export default Navbar;
