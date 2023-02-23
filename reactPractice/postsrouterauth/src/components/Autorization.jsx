import React from 'react'
import { useLocation, Navigate, useNavigation, useNavigate } from 'react-router-dom'
import { UseAuth } from '../utils/useAuth';

export const Autorization = () => {
    const nav = useNavigate();
    const location = useLocation();
    const {signout, signin, user} = UseAuth();

    const handleAuth = () => {
        signin(true, () => nav(location.state?.from || '/'), {replace: true})
    }

    const signOut = () => {
      signout(() => nav(location.state?.from || '/'), {replace: true})
    }

  return (
    <>
    {user ? <>
            <h1>You authorized!</h1>
            <button onClick={signOut}>Sign Out</button>
            </>
    : 
    <div>
        <div><input type="text" placeholder='name' /></div>
        <div><input type="text" placeholder='Surname'/></div>
        <div><button onClick={handleAuth}>Login</button></div>
    </div>
    }
    </>
  )
}
