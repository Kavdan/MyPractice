import React, { useState } from 'react'
import toBag from '../../assets/toBag.svg'
import toBagWhite from '../../assets/toBagWhite.svg'
import { useDispatch } from 'react-redux'
import { addProductToBag } from '../bag/bagSlice'
import { useNavigate } from 'react-router'

export const Product = ({product} : any) => {

    const [bagIcon, setBagIcon] = useState(toBag);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addInBag = (e:any) => {
      e.stopPropagation();
      dispatch(addProductToBag({
        ...product,
        count: 1
      }))
    }
  
  return (
    <div className="product" onClick={(e) => { navigate('/main/' + product.id)}}>
        <img src={product.images[0]}  alt="" />
        <p className="productName">{product.title}</p>
        <p className='productColor'>{product.brand}</p>
        <div className='price'>
            <span className='priceCount'>$ {product.price}</span>
            <button onMouseOver={() => setBagIcon(toBagWhite)}
                    onMouseOut={() => setBagIcon(toBag)}
                    onClick={addInBag}>
                <img src={bagIcon} alt="" />
            </button>
        </div>
    </div>
  )
}
