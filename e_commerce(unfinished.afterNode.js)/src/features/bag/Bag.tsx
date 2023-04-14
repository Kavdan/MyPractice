import React, { useEffect, useState } from 'react'
import { BugItem } from './BugItem'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../products/Product'
import { openModal } from '../modal/modalSlice'
import { useNavigate } from 'react-router'

export const Bag = ({hideCheckout} : any) => {
    const bagProducts = useSelector((state:any) => state.bag)
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      setTotalPrice(bagProducts.reduce((accum: any, item: any) => 
        accum + (item.price * item.count)
      , 0))
    }, [bagProducts])
    
  return (
    <div className='bag'
         style={hideCheckout ?{
          overflowY: !hideCheckout ? "scroll" : "visible",
          background: "white",
          borderRadius: 20 + 'px',
          height: "fit-content",
         } : {}}>
        {bagProducts.map((product:any) => {
            return <BugItem key={product.id} product={product} hideCount={hideCheckout} />
        })}

       { !hideCheckout ? <div className='checkout'>
          { bagProducts.length ? <><div className='totalPrice'>
            <span>Total price = ${totalPrice}</span>
          </div>
          <div className='checkoutBtn'>
            <button onClick={() => navigate('/placeOrder')}>checkout</button>
          </div></> : <h2 style={{
            padding: "20px"
          }}>Bag is empty</h2>}
        </div> : ""}
    </div>
  )
}
