import React from "react";
import { products } from "../backend/db/products";
import "../Styles/Products.css";

const ProductCard = () => {
  return (
    <>
      {products.map((item) => {
        return (
          <div className="product-card-main">
            <h3>{item.title}</h3>
            <img src={item.image} alt="" srcset="" height={"200px"} />
            <h4 className="price-title">{item.price}</h4>
            <button className="cart-btn">Add to cart</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
