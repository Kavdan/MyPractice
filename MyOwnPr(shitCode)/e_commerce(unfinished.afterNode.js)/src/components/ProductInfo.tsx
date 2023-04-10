import React, { useState } from 'react'
import tem from '../assets/siteIcon.svg'
import curr from '../assets/logOut.svg'
import whiteBagIcon from '../assets/toBagWhite.svg'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToBag } from '../features/bagSlice/bagSlice'

export const ProductInfo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();
    const product = useSelector((state : any) => state.products.find((product:any) => product.id.toString() === param.id))
    const [currImage, setCurrImage] = useState(product.thumbnail);
    const [addedInBag, setAddedInBag] = useState(false);

    const addInBag = () => {
        if(addedInBag) return
        setAddedInBag(true);
        dispatch(addProductToBag({
          ...product,
          count: 1
        }))
      }
    
    console.log(product)
  return (
    <div className='productInfo'>
        <div className='back' onClick={() => navigate(-1)}>{" < back"}</div>
        <div className="productMainInfo">
            <div className="images">
                <div className="verticalImages">
                    {product.images.map((url : any) => {
                        return <img src={url} 
                                    alt="" 
                                    onClick={() => setCurrImage(url)}/>
                    })}
                </div>
                <div className="currentImage">
                <img src={currImage} alt="" />
                </div>
            </div>
            <div className="info">
                <p className='title'>{product.title}</p>
                <p className='brand'>{product.brand}</p>
                <div></div>
                <p className='price'>$ {product.price}</p>
                <p className='brief'>
                   {product.description}
                </p>
                <div className='buttonBlock'>
                <button onClick={addInBag} disabled={addedInBag} className={addedInBag ? "added" : ""}>
                    <img src={whiteBagIcon} alt="" />
                    <span>{addedInBag ? "Added In Bag" : "Add In Bag"}</span>
                </button>
                </div>
            </div>
        </div>
        <hr />
        <div className="description">
            <h1>Description</h1>
            <p className='description'>
                {product.description}
            </p>
        </div>
    </div>
  )
}
