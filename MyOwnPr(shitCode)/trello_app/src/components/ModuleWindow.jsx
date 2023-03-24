import React from 'react'
import classes from '../app.module.scss'
import { Card } from './Card'
import closeIcon from '../assets/closeIcon.svg'

export const ModuleWindow = ({element, open, setOpen}) => {
  return (
    <div className={classes.moduleWindow}
         style={{
            display: open ? "flex" : "none"
         }}>
        <div className={classes.moduleWindowElement}>
          <img className={classes.moduleCloseIcon} 
               src={closeIcon} alt=""
               onClick={() => setOpen(false)} />  
          {element()}
        </div>
    </div>
  )
}
