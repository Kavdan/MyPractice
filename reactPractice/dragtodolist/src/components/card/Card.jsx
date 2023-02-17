import React from 'react'
import cl from './card.module.css'

export const Card = ({header, content, ...attr}) => {

  return (
    <div className={cl.card} {...attr}>
        <h1 className={cl.header}>{header}</h1>
        <p>{content}</p>
    </div>
  )
}
