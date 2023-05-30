import React, { useContext } from 'react'
import Navbar from './Navbar'
import "../Styles/Cart.css"
import CartItem from './CartItem'
import { productContext } from '../Contexts/ProductContext'

const Cart = () => {
  const { state } = useContext(productContext)
  const cartListLength = state.cart.length > 0
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
          <div className='cart-total-item'>
            <h5>PRICE DETAILS</h5>
          </div>
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

          <div className='cart-total-item'><p>Total price</p>
            <p>₹ 231</p>
          </div>
          <button className='checkout-btn'>Proceed to checkout</button>
        </div>
      </div> : <h1 className='cart-item-warning'>No item in Cart</h1>}
    </>
  )
}

export default Cart