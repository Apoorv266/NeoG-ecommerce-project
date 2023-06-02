import React, { useContext, useState } from 'react'
import Navbar from '../Navbar'
import { AuthContext } from '../../Contexts/Auth';
import "../../Styles/User-profile.css"
import UserData from './UserData';
import UserAddress from './UserAddress';
import OrderDetails from './OrderDetails';

const UserProfile = () => {
  const [toggle, settoggle] = useState(0)


  const renderComponent = () =>{
    switch (toggle) {
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
          <h3 onClick={() => settoggle(0)} >User details</h3>
          <h3 onClick={() => settoggle(1)}>User Address</h3>
          <h3 onClick={() => settoggle(2)}>My orders</h3>
        </div>

        <div className='profile-body'>
        {renderComponent()}
        </div>
      </div>
    </>
  )
}

export default UserProfile



function MyComponent({ condition }) {
  if (condition) {
    return <UserData />;
  } else {
    return <OrderDetails />;
  }
}