import React, { useContext, useState } from 'react'
import Navbar from '../Navbar'
import "../../Styles/User-profile.css"
import UserData from './UserData';
import UserAddress from './UserAddress';
import OrderDetails from './OrderDetails';
import { ToastView } from '../Toast';
import { productContext } from '../../Contexts/ProductContext';

const UserProfile = () => {
  const {setprofileCard, profileCard} = useContext(productContext)

  const renderComponent = () => {
    switch (profileCard) {
      case 0:
        return <UserData />
      case 1:
        return <UserAddress />
      case 2:
        return <OrderDetails />
      default:
        return null
    }
  }
  return (
    <>
      <Navbar />
      <div className='profile-wrapper'>
        <div className='profile-header'>
          <div className={`list-group-item ${profileCard === 0 && 'active'}`}>
          <h3 onClick={() => setprofileCard(0)} >User details</h3>
          </div>
          <div className={`list-group-item ${profileCard === 1 && 'active'}`}>
          <h3 onClick={() => setprofileCard(1)} >User Address</h3>
          </div>

          <div className={`list-group-item ${profileCard === 2 && 'active'}`}>
          <h3 onClick={() => setprofileCard(2)} >My orders</h3>
          </div>
          
        </div>

        <div className='profile-body'>
          {renderComponent()}
        </div>
      </div>
      <ToastView />
    </>
  )
}

export default UserProfile

