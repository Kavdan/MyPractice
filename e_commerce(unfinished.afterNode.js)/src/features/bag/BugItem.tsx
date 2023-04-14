import React from 'react'
import bag from '../assets/bag.svg'
import { useDispatch } from 'react-redux'
import { addProductToBag, deleteProductFromBag, discreaseCount } from './bagSlice'
import { useNavigate } from 'react-router'

export const BugItem = ({product, hideCount}:any) => {

    const totalPrice = product.price * product.count
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlus = (e:any) => {
        e.stopPropagation();
        dispatch(addProductToBag(product))
    }

    const handleMinus = (e:any) => {
        e.stopPropagation();
        if (product.count === 1) dispatch(deleteProductFromBag(product.id));
        else dispatch(discreaseCount(product))
    }

    const handleRoute = (e : any) => {
        e.stopPropagation();
        navigate(`/main/${product.id}`)
    }
  return (
    <div className='bagItem' onClick={handleRoute}>
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
                { !hideCount ? <div className='count'>
                    <button className="minus" onClick={handleMinus}>-</button>
                    <span>{product.count}</span>
                    <button className='plus' onClick={handlePlus}>+</button>
                </div> : ""}

            </div>
        </div>
    </div>
  )
}
