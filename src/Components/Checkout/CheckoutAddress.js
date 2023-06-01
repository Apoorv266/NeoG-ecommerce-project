import React from "react";
import "../../Styles/Checkout.css";
import { addressData } from "../../backend/db/Address";

const CheckoutAddress = ({handleAddress, address}) => {

  return (
    <>
      <div className="ckout-address-main">
       
          {addressData.map((item) =>{
            return (
              <div className="ckout-address-card" key={item.id}>
              <input type="radio" name="address-radio" id="address-radio" value={1} onClick={()=>handleAddress(item)}  checked={item.id === address.id}/>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.address}
                </p>
                <p>Phone Number : {item.phone}</p>
              </div>
    
            </div>
            )
          })}

        
      </div>
    </>
  );
};

export default CheckoutAddress;
