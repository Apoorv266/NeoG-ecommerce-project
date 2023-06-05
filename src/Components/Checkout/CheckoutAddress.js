import React, { useContext } from "react";
import "../../Styles/Checkout.css";
import { productContext } from "../../Contexts/ProductContext";

const CheckoutAddress = ({ handleAddress, address }) => {
  const { state } = useContext(productContext)
  return (
    <>
      <div className="ckout-address-main">

        {state.address.map((item) => {
          return (
            <div className="ckout-address-card" key={item?._id}>
              <input type="radio" name="address-radio" id="address-radio" value={1} onClick={() => handleAddress(item)} checked={item?._id === address?._id} />
              <div className="address-details">
                <h3>{item?.name}</h3>
                <p>
                  {item?.address}
                </p>
                <p>Phone Number:{item?.phone}</p>
              </div>
            </div>
          )
        })}


      </div>
    </>
  );
};

export default CheckoutAddress;
