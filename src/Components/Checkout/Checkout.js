import React, { useContext, useState } from 'react'
import Navbar from '../Navbar'
import CheckoutAddress from './CheckoutAddress'
import CheckoutPrice from './CheckoutPrice'
import "../../Styles/Checkout.css"
import { productContext } from '../../Contexts/ProductContext'


const Checkout = () => {
  const { state } = useContext(productContext)
  const [address, setaddress] = useState(state.address[0])
  const handleAddress = (obj) =>{
    setaddress(obj)
  }
  return (
    <>
      <Navbar />
      <div className='checkout-main'>
        <CheckoutAddress handleAddress={handleAddress} address={address}/>
        <CheckoutPrice address={address}/>
      </div>
    </>
  )
}

export default Checkout