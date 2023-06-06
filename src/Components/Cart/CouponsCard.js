import React, { useContext } from "react";
import "../../Styles/Checkout.css";
import { productContext } from "../../Contexts/ProductContext";

const CouponsCard = ({ setdispCoupon }) => {
  const { state, dispatch } = useContext(productContext);

  const handleCouponDone = (item) => {
    dispatch({ type: "ADD_COUPON", payload: item });
    setdispCoupon(false);
  };
  return (
    <div className="checkout-price-main">
      <div className="ordr-detail-items">
        <div className="discount-section">
          <h3>Available Coupons</h3>
        </div>
      </div>
      <div className="ordr-price-detail">
        {state?.couponValue?.map((item) => {
          return (
            <div className="coupon-text" key={item.id}>
              <input
                type="radio"
                name="coupon"
                id=""
                onChange={() => handleCouponDone(item)}
              />
              <p>{item.code}</p>
              <p>{item.discount}% OFF</p>
            </div>
          );
        })}
      </div>

      <button className="pay-btn" onClick={() => setdispCoupon(false)}>
        Return
      </button>
    </div>
  );
};

export default CouponsCard;
