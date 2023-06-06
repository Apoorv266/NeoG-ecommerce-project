import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/Checkout.css"
import { cartContext } from '../../Contexts/CartContext'
import {
    CloseCircleOutline
  } from "react-ionicons";
import { productContext } from '../../Contexts/ProductContext';

  const CartPrice = ({ setdispCoupon }) => {
    const {state} = useContext(productContext)
    const { cartPriceObj, isDiscountCodePrst } = useContext(cartContext)
    const { totalPrice, totalDiscount, totalAmount, totalQuantity } = cartPriceObj
    return (
        <div className='checkout-price-main'>
            <div className='ordr-detail-items'>
                <div className='discount-section'>
                    <h3>Have coupons ?</h3>
                    <button className="coupon-btn" onClick={() => setdispCoupon(true)}>Apply coupons</button>
                </div>


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

                <div className='ckot-text'>
                    <p>Coupon Discount</p>
                    <p>₹ 0</p>
                </div>

                {isDiscountCodePrst ? <div className='ckot-text'>
                    <p>Coupon code ({state?.selectedCoupon.code}) </p>
                    <p>- {state?.selectedCoupon.discount}%</p>
                    <span>
                    <CloseCircleOutline
                        color={'#ffffff'}
                        height="20px"
                        width="20px"
                    /></span>
                </div> : null}

                <div className='ckot-text'>
                    <p>Total Amount</p>
                    <p>₹ {totalAmount}</p>
                </div>


            </div>

            <Link to={"/checkout"}>
                <button className='pay-btn'>Proceed to checkout</button>
            </Link>
            <p>You saved total of ₹ {totalDiscount} on this order !</p>
        </div>
    )
}

export default CartPrice