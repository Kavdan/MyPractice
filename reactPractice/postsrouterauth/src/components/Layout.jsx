import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export const Layout = () => {
  return (
    <>
    <header>
        <Link to="/"> Posts</Link>
        <Link to="/create_post"> Create Post</Link>
        <Link to="/auto"> Autorization</Link>
    </header>

    <Outlet />
    </>
  )
}
