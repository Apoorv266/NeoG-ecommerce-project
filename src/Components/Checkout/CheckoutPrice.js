import React, { useContext } from 'react'
import "../../Styles/Checkout.css"
import { productContext } from '../../Contexts/ProductContext'

const CheckoutPrice = ({address}) => {
    const { state,cartPriceObj} = useContext(productContext)
    const {totalPrice, totalDiscount, totalAmount} = cartPriceObj
    return (
        <div className='checkout-price-main'>
            <h2>Order Details</h2>
            <div className='ordr-detail-items'>
                
                {state.cart.map((item) =>{
                    return (
                        <div className='ckot-text' key={item._id}>
                        <p>{item.title}</p>
                        <p>{item.qty}</p>
                    </div>
                    )
                })}
              
            </div>
            <h2>Price Details</h2>
            <div className='ordr-price-detail'>
                <div className='ckot-text'>
                    <p>Price ({state.cart.length} items)</p>
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
            <h2>Deliver to</h2>
            <div className='ckout-card-address'>
                <h3>{address?.name}</h3>
                <p>{address?.address}</p>
                <p>{address?.phone}</p>
            </div>
            <button className='pay-btn'>Pay and Place Order</button>
        </div>
    )
}

export default CheckoutPrice