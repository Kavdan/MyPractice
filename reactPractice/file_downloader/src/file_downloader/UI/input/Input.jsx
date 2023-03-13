import React from 'react'
import input from './input.module.scss'
const Input = ({placeholder, ...props}) => {
  return (
    <input {...props} type="url" placeholder={placeholder} required />
  )
}

export default Input