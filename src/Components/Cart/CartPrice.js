import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../../Contexts/ProductContext'
import "../../Styles/Checkout.css"
import { cartContext } from '../../Contexts/CartContext'

const CartPrice = () => {
    const { cartPriceObj } = useContext(cartContext)
    const { totalPrice, totalDiscount, totalAmount } = cartPriceObj
    return (
        <div className='checkout-price-main'>
            <div className='ordr-detail-items'>
                <div className='discount-section'>
                    <h3>Have coupons ?</h3>
                    <button className="coupon-btn">Apply coupons</button>
                </div>


            </div>
            <h2>Price Details</h2>
            <div className='ordr-price-detail'>
                <div className='ckot-text'>
                    <p>Price ({ } items)</p>
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