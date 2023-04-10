import React, { useEffect, useState } from 'react'
import searchIcon from '../assets/searchIcon.svg'
import { Product } from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { addAll } from '../features/productsSlice/productSlice'

export const ProductList = () => {
  const [query, setQuery] : any = useState("")
  const products = useSelector((state : any) : any => state.products)
  const dispatch = useDispatch();
  const sortedProducts = [...products].filter(product => (product.title.toLowerCase()).includes(query.toLowerCase()))

  useEffect( () => {
    (async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json()
      dispatch(addAll(data.products))
  })();
  }, [])



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
              return <Product product={product}/>
            })}
        </div>
    </div>
  )
}
