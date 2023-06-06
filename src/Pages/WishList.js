import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import { productContext } from '../Contexts/ProductContext'
import "../Styles/Products.css"
import { ToastView } from '../Components/Toast'


const WishList = () => {
  const { state } = useContext(productContext)
  return (
    <>
      <Navbar />
      <div className='wishlist-container'>
       {state.wishlist.length > 0 ? <div className='wishlist-item-card'>
          <ProductCard data={state.wishlist} toWishlist={true} />
        </div> : <h1 className='wishlist-txt'>No items in wishlist !</h1>}
      </div>
      <ToastView/>
    </>
  )
}

export default WishList