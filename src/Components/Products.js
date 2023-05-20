import React from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import "../Styles/Products.css"
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <>
      <Navbar />
      <div className='product-main'>
        <Filters />
        <div className='product-card'>
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default Products