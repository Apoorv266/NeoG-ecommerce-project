import React, { useContext } from "react";
import "../Styles/Cart.css";
import { productContext } from "../Contexts/ProductContext";

const CartItem = ({ item }) => {
  const { removeFromCart, addToWishlist, updateCartFunc,calPercentage } =
    useContext(productContext);
  return (
    <div className="product-card-item" key={item._id}>
      <div className="card-top">
        <img src={item.image} alt="" srcset="" width={"200px"} />
      </div>
      <div className="card-item-details">
        <h3>{item.title}</h3>
        <p className="brand-title">{item.company}</p>
   
        <div className="cart-price">
          <p className="disc-price">₹{item.discount_price}</p>
          <p className="actual-price">₹{item.price}</p>
          <p className="price-percentage" >({calPercentage(item.price,item.discount_price )}% OFF)</p>
        </div>
        <fieldset>
          <input
            type="button"
            value="-"
            class="decrease"
            className="incr-btn"
            onClick={() => updateCartFunc(item._id, "decrement")}
            disabled={item.qty <= 1}
          />
          <input
            type="text"
            id="three-max"
            value={`${item.qty}`}
            className="incr-txt"
          />
          <input
            type="button"
            value="+"
            class="increase"
            className="incr-btn"
            onClick={() => updateCartFunc(item._id, "increment")}
          />
        </fieldset>
      </div>
      <div className="card-bottom">
        <button className="btn1" onClick={() => addToWishlist(item)}>
          Move to wishlist
        </button>
        <button className="btn2" onClick={() => removeFromCart(item._id)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
