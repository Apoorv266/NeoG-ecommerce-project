import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { isLoggedIn } = useContext(AuthContext);
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
}

export default PrivateRoute