import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

export const Message = React.forwardRef(({userName, text, currMessage}:any, ref:any) => {

  return (
    <div ref={ref} className={`messageBlock ${currMessage ? "ownMess" : ""}`}>
        <span className='userName'>name: {userName}</span>
        <span className='textOfMessage'>{text}</span>
    </div>
  )
})
