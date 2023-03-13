import React from 'react';
import classes from "./button.module.scss";

const Button = ({children, ...props}) => {
  return (
    <button className={classes.buttonDownload} {...props}>
        {children}
    </button>
  )
}

export default Button