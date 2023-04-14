import React, { useDeferredValue, useEffect, useState } from 'react'
import searchIcon from '../../assets/searchIcon.svg'
import { Product } from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { addAll, getAllProducts } from './productSlice'

export const ProductList = () => {
  const productsFrom = useSelector((state : any) : any => state.products)
  const [query, setQuery] : any = useState("")
  const dispatch = useDispatch();
  const sortedProducts = [...productsFrom].filter(product => (product.title.toLowerCase()).includes(query.toLowerCase()))
  const products = useDeferredValue(sortedProducts);

  useEffect( () => {  
    dispatch(getAllProducts())
  }, [ ])


  return (
    <div className='productListContainer'>
        <div className="searchBlock">
            <div className="search">
                <input type="text" 
                       placeholder='...search product'
                       value={query}
                       onChange={e => setQuery(e.target.value)}/>
                <div className='imgContainer'>
                <img src={searchIcon} alt="" />
                </div>
            </div>
        </div>
        <div className="productList">
            {sortedProducts.map((product : any) => {
              return <Product key={product.id} product={product}/>
            })}
        </div>
    </div>
  )
}
