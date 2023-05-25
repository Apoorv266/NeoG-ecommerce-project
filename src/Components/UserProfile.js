import React, { useContext } from 'react'
import Navbar from './Navbar'
import { AuthContext } from '../Contexts/Auth';
import "../Styles/User-profile.css"

const UserProfile = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div style={{ color: "white" }}>
      <Navbar />
      <div className='profile-container'>
        <div className='user-detail-main'>
          <h2>User Details</h2>
          <h2>Username: {user?.firstName} {user?.lastName}</h2>
          <h2>Email: {user?.email}</h2>
          <button onClick={handleLogout} className='logout-btn'>logout</button>
          
        </div>
      </div>
    </div>
  )
}

export default UserProfile