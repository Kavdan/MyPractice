import React from 'react'
import classes from '../app.module.scss'

export const Tag = ({text}) => {
  return (
    <span className={classes.tag}>{text}</span>
  )
}
