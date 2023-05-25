import React from "react";
import "../Styles/Products.css";
import CircumIcon from "@klarr-agency/circum-icons-react";
import { Link } from "react-router-dom";
import { Heart, HeartOutline, ResizeOutline } from "react-ionicons";



const ProductCard = ({ data, toWishlist }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="product-card-main">
            <div className="product-card-icons">
              {toWishlist ? <Heart
                color={'#ffffff'}
                height="35px"
                width="35px"
              /> : <HeartOutline
                color={'#ffffff'}
                height="35px"
                width="35px"
              />}
              <Link to={`/product/${item._id}`}>
                <ResizeOutline
                  color={'#ffffff'}
                  height="35px"
                  width="35px"
                />
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
