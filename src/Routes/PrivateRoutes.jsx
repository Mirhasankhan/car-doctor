import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user, loading } = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;