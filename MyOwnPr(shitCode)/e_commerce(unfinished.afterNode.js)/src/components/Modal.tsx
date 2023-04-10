import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

export const Modal = ({trigger, children} : any) : any => {
    const modal : any = useSelector((state : any) => state.modal);
    const dispatch = useDispatch()

  return (
      <>
      { modal.view ? <div className='modalContainer'>
        <div className="modal">
        <button onClick={() => dispatch(closeModal())}>close</button>
            {children}
        </div>
    </div> : ""}
    </>
  )
}
