import React, { useContext } from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import "../Styles/Products.css"
import ProductCard from './ProductCard'
import { productContext } from '../Contexts/ProductContext'
import Loader from './Loader'


const Products = () => {
  const {  loader, filterbyPrice } = useContext(productContext)
  return (
    <>
      <Navbar />
      {loader ? <Loader /> : <div className='product-main'>
        <Filters />
        <div className='product-item-card' style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <ProductCard data={filterbyPrice} toWishlist={false} />
        </div>
      </div>
      }


    </>
  )
}

export default Products