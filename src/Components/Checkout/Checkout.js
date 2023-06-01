import React, { useState } from 'react'
import Navbar from '../Navbar'
import CheckoutAddress from './CheckoutAddress'
import CheckoutPrice from './CheckoutPrice'
import "../../Styles/Checkout.css"
import { addressData } from '../../backend/db/Address'

const Checkout = () => {
  const [address, setaddress] = useState(addressData[0])
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