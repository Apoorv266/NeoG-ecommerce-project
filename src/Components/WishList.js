import React, { useContext } from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import { productContext } from '../Contexts/ProductContext'
import "../Styles/Products.css"


const WishList = () => {
  const { state } = useContext(productContext)
  return (
    <>
      <Navbar />
      <div className='wishlist-container'>
       {state.wishlist.length > 0 ? <div className='product-item-card' style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          <ProductCard data={state.wishlist} toWishlist={true} />
        </div> : <h1 className='wishlist-txt'>No items in wishlist 🫠</h1>}
      </div>
    </>
  )
}

export default WishList