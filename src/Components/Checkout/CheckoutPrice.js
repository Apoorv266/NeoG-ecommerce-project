import React, { useContext } from 'react'
import "../../Styles/Checkout.css"
import { productContext } from '../../Contexts/ProductContext'
import { Link } from 'react-router-dom'
import { v4 as uuid } from "uuid";
import { cartContext } from '../../Contexts/CartContext';
import {
    CloseCircleOutline
  } from "react-ionicons";
const CheckoutPrice = ({address}) => {
    const { state, dispatch, setprofileCard} = useContext(productContext)
    const {cartPriceObj, isDiscountCodePrst} = useContext(cartContext)
    const {totalPrice, totalDiscount, totalAmount, totalQuantity} = cartPriceObj

    const handleCheckot = (currentAddress, cart,totalCheckoutAmount) =>{
        const orderDetail = {
            id: uuid(),
            productsList: [...cart],
            address: currentAddress,
            amount: totalCheckoutAmount,
            date: new Date(),
          };
       dispatch({type: "ADD_ORDER_DETAILS", payload :orderDetail})
       setprofileCard(2)
       dispatch({type: "CLEAR_CART"})
    }
    return (
        <div className='checkout-price-main'>
            <h2>Order Details</h2>
            <div className='ordr-detail-items'>
                
                {state.cart.map((item) =>{
                    return (
                        <div className='ckot-text' key={item._id}>
                        <p>{item.title}</p> -
                        <p>{item.qty}</p>
                    </div>
                    )
                })}
              
            </div>
            <h2>Price Details</h2>
            <div className='ordr-price-detail'>
                <div className='ckot-text'>
                    <p>Price ({totalQuantity} items)</p>
                    <p>₹ {totalPrice}</p>
                </div>
                <div className='ckot-text'>
                    <p>Total Discount</p>
                    <p>- ₹ {totalDiscount}</p>
                </div>
                <div className='ckot-text'>
                    <p>Delivery Charges</p>
                    <p>FREE</p>
                </div>
                {isDiscountCodePrst ? <div className='ckot-text'>
                    <p>Coupon code ({state?.selectedCoupon.code}) </p>
                    <div className='coupon-discount'>
                    <p>- {state?.selectedCoupon.discount}%</p>
                    <span>
                    <CloseCircleOutline
                        color={'#ffffff'}
                        height="20px"
                        width="20px"
                        onClick={()=>dispatch({type:  "DELETE_COUPON"})}
                        style={{marginTop:"8px"}}
                    /></span>
                    </div>
                </div> : null}

                <div className='ckot-text'>
                    <p>Total Amount</p>
                    <p>₹ {totalAmount.toFixed(2)}</p>
                </div>
            </div>
            <h2>Deliver to</h2>
            <div className='ckout-card-address'>
                <h3>{address?.name}</h3>
                <p>{address?.address}</p>
                <p>{address?.phone}</p>
            </div>
            <Link to={"/order-placed"}>
            <button className='pay-btn' onClick={()=>handleCheckot(address, state.cart,totalAmount )}>Pay and Place Order</button>
            </Link>
        </div>
    )
}

export default CheckoutPrice