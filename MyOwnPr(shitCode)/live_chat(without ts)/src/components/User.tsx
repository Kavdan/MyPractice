import React from 'react'

export const User = ({name, ...props} : any) => {
  return (
    <div {...props} className='userBlock'>
        <div className='avatar'></div>
        <span className='userName'>{name}</span>
    </div>
  )
}
