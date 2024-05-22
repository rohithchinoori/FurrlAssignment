import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <img
          src={product.images[0].src}
          alt={product.title}
          className="detail-image"
        />
        <h1 className="detail-head">{product.title.slice(0, 24)}</h1>

        <div className="d-price-cont">
          <p className="d-price">Rs.{product.price.value}</p>
          <p className="d-mrp">Rs. {product.MRP.value}</p>
          <p className="d-discount">{product.discountPercent}%</p>
        </div>
        <button className="bag-but">Add to bag</button>
      </div>
    </>
  );
};

export default ProductDetail;
