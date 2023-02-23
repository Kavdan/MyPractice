import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UseAuth } from '../utils/useAuth';

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = UseAuth();
    
    if (!user) {
        return <Navigate to="/auto" state={{from: location}}/>;
    }

  return children
}
