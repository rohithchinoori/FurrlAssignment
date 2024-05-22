import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdIosShare } from "react-icons/md";
import ShareModal from "../ShareModal"; // Make sure to import the ShareModal component
import "./index.css";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleShareClick = (event) => {
    event.stopPropagation(); // Prevent triggering the handleProductClick event
    setIsModalOpen(true);
  };

  return (
    <div className="product-item" onClick={handleProductClick}>
      <img
        src={product.images[0].src}
        alt={product.title}
        className="product-image"
      />
      <button className="share" onClick={handleShareClick}>
        <MdIosShare size={15} />
      </button>
      <p className="title">{product.brand[0].name}</p>
      <p className="title">{product.title.slice(0, 18)}</p>
      <div className="price-cont">
        <p className="price">Rs.{product.price.value}</p>
        <p className="mrp">Rs. {product.MRP.value}</p>
        <p className="discount">{product.discountPercent}%</p>
      </div>
      <ShareModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductItem;
