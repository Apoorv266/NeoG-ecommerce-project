import React from "react";
import "../Styles/Products.css";

const ProductCard = ({data}) => {
  return (
    <>
      {data.map((item) => {
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
