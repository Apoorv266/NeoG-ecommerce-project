import React, { useContext } from 'react'
import Navbar from './Navbar'
import "../Styles/Cart.css"
import CartItem from './CartItem'
import { productContext } from '../Contexts/ProductContext'

const Cart = () => {
  const { state ,cartPriceObj} = useContext(productContext)
  const cartListLength = state.cart.length > 0
  const {totalPrice, totalDiscount, totalAmount} = cartPriceObj
  return (
    <>
      <Navbar />
      <h2 className='cart-title'>My Cart ({state.cart.length})</h2>
      {cartListLength ? <div className='cart-components'>
        <div className='product-card-cart'>
          {state.cart.map((item) => <CartItem item={item} />)}

        </div>

        <div className='cart-total-card'>
          <div className='cart-total-item'>
            <p>Have A Coupon ?</p>
            <button>Available coupons</button>
          </div>

            <h3>Price Details</h3>
 
          <div className='cart-total-item'><p>Price ({state.cart.length} items)</p>
            <p>₹ {totalPrice}</p>
          </div>

          <div className='cart-total-item'><p>Total Discount</p>
            <p>- ₹ {totalDiscount}</p>
          </div>

          <div className='cart-total-item'><p>Delivery Charges</p>
            <p>FREE</p>
          </div>

          <div className='cart-total-item'><p>Coupon Discount</p>
            <p>₹ 0.00</p>
          </div>

          <div className='cart-total-item'><p>Total Amount</p>
            <p>₹ {totalAmount}</p>
          </div>
          <div className='cart-total-item'><p>Coupon Applied ()</p>
            <p>X</p>
          </div>
          <button className='checkout-btn'>Proceed to checkout</button>
          <p>You have saved  ₹ {totalDiscount} on this order !</p>
        </div>
      </div> : <h1 className='cart-item-warning'>No item in Cart</h1>}
    </>
  )
}

export default Cart