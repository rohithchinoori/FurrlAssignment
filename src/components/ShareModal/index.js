import React from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import "./Sharemodal.css";

const ShareModal = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        <MdClose size={20} />
      </button>
      <div className="modal-content">
        <img
          src={product.images[0].src}
          alt={product.title}
          className="modal-image"
        />
        <h1 className="modal-head">{product.title}</h1>
        <p className="modal-brand">{product.brand[0].name}</p>
        <div className="price-cont">
          <p className="price">Rs.{product.price.value}</p>
          <p className="mrp">Rs. {product.MRP.value}</p>
          <p className="discount">{product.discountPercent}%</p>
        </div>
        <button
          className="share-button"
          onClick={() => {
            // Implement your sharing functionality here
            alert("Share this product!");
          }}
        >
          Share
        </button>
      </div>
    </Modal>
  );
};

export default ShareModal;
