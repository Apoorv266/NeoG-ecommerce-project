import React, { useContext } from "react";
import "../../Styles/Checkout.css";
import { productContext } from "../../Contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const CheckoutAddress = ({ handleAddress, address }) => {
  const { state , setprofileCard} = useContext(productContext)
  const navigate = useNavigate()

  const handleNoAddress = () =>{
    navigate("/user-details")
    setprofileCard(1)
  }
  return (
    <>
      <div className="ckout-address-main">

        {state.address.length > 0 ? state?.address.map((item) => {
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
        }) : <div className="no-address-main"><h2 className="no-address-title">Add address first from profile !</h2>
        <button onClick={handleNoAddress} className="coupon-btn">Add address !</button>
        </div>} 


      </div>
    </>
  );
};

export default CheckoutAddress;
