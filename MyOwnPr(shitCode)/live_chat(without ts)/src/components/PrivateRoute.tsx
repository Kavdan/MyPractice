import React from 'react'
import { useSelector } from 'react-redux'
import { Signin } from '../pages/Signin';

export const PrivateRoute = ({children} : any) : any => {
    const currentUser = useSelector((state:any) => state.currentUser);

    if (!currentUser) return <Signin />
  return (
    <>
     {children}
    </>
  )
}
