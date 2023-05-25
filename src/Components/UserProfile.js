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
          <p>Username: {user?.firstName} {user?.lastName}</p>
          <p>Email: {user?.email}</p>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile