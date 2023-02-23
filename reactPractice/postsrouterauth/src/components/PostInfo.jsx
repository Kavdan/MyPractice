import {React, useState, useEffect} from 'react'
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom'

export const PostInfo = ({posts}) => {
  const {id} = useParams()
  const post = [...posts].filter((post) => post.id === +id);
  const nav = useNavigate();

  const goBack = () => {
    nav(-1);
  }

  const sign = () => {
    nav("/auto", {state: `/${id}`});
  }

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={sign}>Sign in</button>
      <Outlet />
      <Link to="/">Go Home</Link>
        {
          +id > posts.length ? "Такой пост не существует!"
          : 
          <><h1>{post[0]?.title}</h1>
          <p>{post[0]?.body}</p>
          </>
        }       
    </div>
  )
}
