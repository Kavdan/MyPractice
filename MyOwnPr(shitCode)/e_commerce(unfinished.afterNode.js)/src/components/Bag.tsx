import React, { useEffect, useState } from 'react'
import { BugItem } from './BugItem'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from './Product'
import { openModal } from '../features/modal/modalSlice'
import { OrderInfo } from './OrderInfo'

export const Bag = () => {
    const bagProducts = useSelector((state:any) => state.bag)
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      setTotalPrice(bagProducts.reduce((accum: any, item: any) => 
        accum + (item.price * item.count)
      , 0))
    }, [bagProducts])
    
  return (
    <div className='bag'>
        {bagProducts.map((product:any) => {
            return <BugItem product={product} />
        })}

        <div className='checkout'>
          <div className='totalPrice'>
            <span>Total price = ${totalPrice}</span>
          </div>
          <div className='checkoutBtn'>
            <button onClick={() => dispatch(openModal())}>checkout</button>
          </div>
        </div>
          <OrderInfo totalPrice={totalPrice}/>
    </div>
  )
}
