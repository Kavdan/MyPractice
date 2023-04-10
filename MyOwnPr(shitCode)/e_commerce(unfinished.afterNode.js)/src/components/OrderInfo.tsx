import React from 'react'
import { useSelector } from 'react-redux'

export const OrderInfo = ({totalPrice} : any) => {
  const info = useSelector((state : any) => state.shippingData);

  return (
    <div className='orderInfo'>
        <p className="fullname">full name: {info.fullName}</p>
        <p className="address">address: {info.address}</p>
        <p className='cardNumber'>last number of card: {info?.cardNumber?.slice(info.cardNumber.length - 5)}</p>
    </div>
  )
}
