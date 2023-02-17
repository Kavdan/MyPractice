import React from 'react'
import cl from './mymodal.module.css'

export const Mymodal = ({children, visible, setVisible}) => {
    let opened = [cl.Mymodule];
    if (visible) {
        opened.push(cl.active);
    }
  return (
    <div className={opened.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.MymoduleContent} onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
    </div>
  )
}
