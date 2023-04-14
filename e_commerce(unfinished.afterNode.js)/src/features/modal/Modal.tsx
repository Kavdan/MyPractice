import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './modalSlice';

export const Modal = ({trigger, children} : any) : any => {
    const modal : any = useSelector((state : any) => state.modal);
    const dispatch = useDispatch()

  return (
      <>
      { modal.view ? <div className='modalContainer'>
        <div className="modal">
          <h1>Подождите пожалуйста!</h1>
        </div>
    </div> : ""}
    </>
  )
}
