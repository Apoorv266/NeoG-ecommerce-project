import React, { useContext } from 'react'
import "../../Styles/Checkout.css"
import { productContext } from '../../Contexts/ProductContext'
import { Link } from 'react-router-dom'
import { v4 as uuid } from "uuid";

const CheckoutPrice = ({address}) => {
    const { state,cartPriceObj, dispatch} = useContext(productContext)
    const {totalPrice, totalDiscount, totalAmount} = cartPriceObj

    const handleCheckot = (currentAddress, cart,totalCheckoutAmount) =>{
        const orderDetail = {
            id: uuid(),
            productsList: [...cart],
            address: currentAddress,
            amount: totalCheckoutAmount,
            date: new Date(),
          };
       dispatch({type: "ADD_ORDER_DETAILS", payload :orderDetail})
    }
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
            <Link to={"/order-placed"}>
            <button className='pay-btn' onClick={()=>handleCheckot(address, state.cart,totalAmount )}>Pay and Place Order</button>
            </Link>
        </div>
    )
}

export default CheckoutPrice