import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { token } = useContext(AuthContext);
    return token ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
}

export default PrivateRoute