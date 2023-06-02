import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth';

const UserData = () => {
    const { user ,handleLogout} = useContext(AuthContext);
    return (
        <div className='user-detail-main'>
            <p>Username: {user?.firstName} {user?.lastName}</p>
            <p>Email: {user?.email}</p>
            <button onClick={handleLogout} className='logout-btn'>logout</button>
        </div>
  )
}

export default UserData