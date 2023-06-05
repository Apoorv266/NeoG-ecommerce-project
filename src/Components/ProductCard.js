import React, { useContext } from "react";
import "../Styles/Products.css";
import { Link } from "react-router-dom";
import { Heart, HeartOutline, ResizeOutline } from "react-ionicons";
import { productContext } from "../Contexts/ProductContext";



const ProductCard = ({ data }) => {
  const { addToWishlist, isInWishlist, removeFromWishlist, addtoCart, isInCart, calPercentage } = useContext(productContext)
  return (
    <>
      {data.map((item) => {
        return (
          <div className="product-card-main" key={item._id}>
            <div className="product-card-icons">
              <div className="product-rating">
                <span><img src={require("../Images/star-icon.png")} alt="" srcSet="" width={"25px"} /><span className="">{item.starRating}</span></span>
              </div>
              <div>
                {isInWishlist(item._id) ? <Heart
                  color={'red'}
                  height="35px"
                  width="35px"
                  onClick={() => removeFromWishlist(item._id)}
                /> : <HeartOutline
                  color={'#ffffff'}
                  height="35px"
                  width="35px"
                  onClick={() => (addToWishlist(item))}
                />}
                <Link to={`/product/${item._id}`}>
                  <ResizeOutline
                    color={'#ffffff'}
                    height="35px"
                    width="35px"
                  />
                </Link>
              </div>


            </div>
            <h3>{item.title}</h3>
            <img src={item.image} alt="" srcSet="" height={"200px"} />
            <div className="cart-price">
              <h2 className="disc-price product-card">₹ {item.discount_price}</h2>
              <p className="actual-price">₹ {item.price}</p>
              <p className="price-percentage" >({calPercentage(item.price, item.discount_price)}% OFF)</p>
            </div>
            {isInCart(item._id) ? <Link to={"/cart"}><button className="cart-btn" style={{ backgroundColor: "var(--tertiary-color)" }}>Go to cart</button></Link> : <button className="cart-btn" onClick={() => addtoCart(item)}>Add to cart</button>}
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
