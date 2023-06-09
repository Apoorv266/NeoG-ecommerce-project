import React, { useContext, useState } from 'react'
import Navbar from '../Navbar'
import "../../Styles/Cart.css"
import CartItem from './CartItem'
import { productContext } from '../../Contexts/ProductContext'
import CartPrice from './CartPrice'
import { ToastView } from '../Toast'
import CouponsCard from './CouponsCard'

const Cart = () => {
  const { state } = useContext(productContext)
  const cartListLength = state.cart.length > 0
  const [dispCoupon, setdispCoupon] = useState(false)
  return (
    <>
      <Navbar />
      <h2 className='cart-title'>My Cart ({state.cart.length})</h2>
      {cartListLength ? <div className='checkout-main'>
        <div className='cart-item-cards'>
          {state.cart.map((item) => <CartItem item={item} />)}
        </div>
        {dispCoupon ? <CouponsCard setdispCoupon={setdispCoupon}/> : <CartPrice setdispCoupon={setdispCoupon}/>}
        </div> : <h1 className='cart-title'>No item in Cart</h1>}
      <ToastView />
    </>
  )
}

export default Cart