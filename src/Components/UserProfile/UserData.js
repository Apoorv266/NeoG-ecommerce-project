import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth';
import { productContext } from '../../Contexts/ProductContext';

const UserData = () => {
const {dispatch} = useContext(productContext)
    const clickHandleLoginBtn = () =>{
        handleLogout()
        dispatch({type: "HANDLE_LOGOUT"})
    }
    const { user ,handleLogout} = useContext(AuthContext);
    return (
        <div className='user-detail-main'>
            <p>Username: {user?.firstName} {user?.lastName}</p>
            <p>Email: {user?.email}</p>
            <button onClick={clickHandleLoginBtn} className='logout-btn'>logout</button>
        </div>
  )
}

export default UserData