import React, { useContext } from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import "../Styles/Products.css"
import ProductCard from './ProductCard'
import { productContext } from '../Contexts/ProductContext'
import Loader from './Loader'


const Products = () => {
  const {state, loader} = useContext(productContext)
  return (
    <>
      <Navbar />
      {loader ? <Loader/> : <div className='product-main'>
        <Filters />
        <div className='product-card'>
       <ProductCard data={state.products}/>
       
        </div>
      </div>
       } 
      
         
    </>
  )
}

export default Products