import React from 'react'

export const Post = ({header, content}) => {
  return (
    <div>
        <h2>{header}</h2>
        <p>{content}</p>
    </div>
  )
}
