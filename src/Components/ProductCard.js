import React, { useContext } from "react";
import "../Styles/Products.css";
import { Link } from "react-router-dom";
import { Heart, HeartOutline, ResizeOutline } from "react-ionicons";
import { productContext } from "../Contexts/ProductContext";



const ProductCard = ({ data }) => {
  const {addToWishlist, isInWishlist, removeFromWishlist} = useContext(productContext)
  return (
    <>
      {data.map((item) => {
        return (
          <div className="product-card-main">
            <div className="product-card-icons">
              {isInWishlist( item._id) ? <Heart
                color={'#ffffff'}
                height="35px"
                width="35px"
                onClick={()=>removeFromWishlist(item._id)}
              /> : <HeartOutline
                color={'#ffffff'}
                height="35px"
                width="35px"
                onClick={()=>(addToWishlist(item))}
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
