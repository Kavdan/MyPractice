import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>{error.statusText}</h1>
    </div>
  )
}
