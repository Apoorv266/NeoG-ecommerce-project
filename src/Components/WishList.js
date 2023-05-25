import React, { useContext } from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import { productContext } from '../Contexts/ProductContext'
import { products } from '../backend/db/products'
import "../Styles/Products.css"


const WishList = () => {
  const { state, loader } = useContext(productContext)
  return (
    <>
      <Navbar />
      <div className='wishlist-container'>
      <div className='product-card' style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        <ProductCard data={state.wishlist} toWishlist = {true}/>
      </div>
      </div>
    </>
  )
}

export default WishList