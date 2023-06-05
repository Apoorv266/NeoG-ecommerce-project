import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import "../Styles/Products.css"
import ProductCard from './ProductCard'
import { productContext } from '../Contexts/ProductContext'
import Loader from './Loader'
import { ToastView } from './Toast'
import { AuthContext } from '../Contexts/Auth'
import MobileFilter from './MobileFilter'
import { MenuOutline} from "react-ionicons";


const Products = () => {
  const { filterFunction } = useContext(productContext)
  const { loader } = useContext(AuthContext)
  const [...filterArray] = filterFunction()
  const [IsOpen, setIsOpen] = useState(false)

  const HandleMob = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Navbar />
      <div className="mobile-menu">
          <div onClick={HandleMob}>
            <MenuOutline
              color={'#ffffff'}
              height="40px"
              width="40px"
            />
          </div>
          {IsOpen === true && <MobileFilter IsOpen={IsOpen} setIsOpen={setIsOpen} />}
        </div>
      {loader ? <Loader /> : <div className='product-main'>
        <div className="web-menu">
          <Filters />
        </div>
        
        {filterArray.length > 0 ? <div className='product-item-card' >
          <ProductCard data={filterArray} toWishlist={false} />
        </div> : <div className='no-products-title'><h2 >No products to display !</h2></div>}
      </div>
      }

      <ToastView />
    </>
  )
}

export default Products