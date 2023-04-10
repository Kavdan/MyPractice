import React from 'react'
import bag from '../assets/bag.svg'
import { useDispatch } from 'react-redux'
import { addProductToBag, deleteProductFromBag, discreaseCount } from '../features/bagSlice/bagSlice'

export const BugItem = ({product}:any) => {

    const totalPrice = product.price * product.count
    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch(addProductToBag(product))
    }

    const handleMinus = () => {
        if (product.count === 1) dispatch(deleteProductFromBag(product.id));
        else dispatch(discreaseCount(product))
    }
  return (
    <div className='bagItem'>
        <div className="img">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className='info'>
            <div className="text">
                <p className="title">{product.title}</p>
                <p className="brand">{product.brand}</p>
                <p className="description">{product.description}</p>
            </div>
            <div className='priceAndCount'>
                <p className="price">${product.price} x {product.count} = ${totalPrice}</p>
                <div className='count'>
                    <button className="minus" onClick={handleMinus}>-</button>
                    <span>{product.count}</span>
                    <button className='plus' onClick={handlePlus}>+</button>
                </div>

            </div>
        </div>
    </div>
  )
}
