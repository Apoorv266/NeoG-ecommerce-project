import React from "react";
import "../Styles/Products.css";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { Link, Navigate } from "react-router-dom";

const ProductCard = ({data}) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="product-card-main">
            <div className="product-card-icons">
            <CircumIcon name="heart" color={"white"} />
            <Link to={`/product/${item._id}`}>
              <CircumIcon name="maximize_1" color={"white"}/>
            </Link>
            
            </div>
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
