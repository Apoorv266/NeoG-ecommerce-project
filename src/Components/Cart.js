import React from 'react'
import Navbar from './Navbar'
import "../Styles/Cart.css"

const Cart = () => {
  return (
    <>
      <Navbar />
      <h2 className='cart-title'>My Cart</h2>
      <div className='cart-components'>
        <div className='cart-total-card'>
          <div className='cart-total-item'><p>Have A Coupon ?</p>
            <button>Available coupons</button>
          </div>
          <h5>PRICE DETAILS</h5>

          <div className='cart-total-item'><p>Price (2 items)</p>
            <p>₹ 899</p>
          </div>

          <div className='cart-total-item'><p>Discount</p>
            <p>-₹ 630</p>
          </div>

          <div className='cart-total-item'><p>Delivery Charges</p>
            <p>FREE</p>
          </div>

          <div className='cart-total-item'><p>Coupon Discount</p>
            <p>₹ 0.00</p>
          </div>
        </div>
        <div className='cart-items'>

        </div>
      </div>
    </>
  )
}

export default Cart