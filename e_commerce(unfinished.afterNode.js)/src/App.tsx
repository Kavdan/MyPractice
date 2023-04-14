import { Suspense, lazy, useEffect, useState } from 'react'
import { LeftMenu } from './components/LeftMenu'
import './app.scss'
import { Route, Routes } from 'react-router'
import { Modal } from './features/modal/Modal'
import { Registration } from './features/autorization/Registration'
import { useDispatch, useSelector } from 'react-redux'
import { addAll } from './features/products/productSlice'
import { AddPaymentMethod } from './features/orders/AddPaymentMethod'
import { AddAddress } from './features/orders/AddAddress'

const Main = lazy(():any => import('./pages/defProductList'))
const Product = lazy(():any => import('./pages/defProductInfo'))
const Bag = lazy(():any => import('./pages/defBag'));
const SignIn = lazy(() => import('./pages/defSignIn'));
const PlaceOrder = lazy(() => import('./pages/defPlaceOrder'))
function App() {

  return (
    <div className="App">
     <LeftMenu />
     <Modal>
     </Modal>
     
     <Suspense fallback={<h1>...stay there</h1>}>
     <Routes>
      <Route path="/">
          <Route index path='/main' element={<Main />}/>
          <Route path='/main/:id' element={<Product />} />
          <Route path='/bag' element={<Bag />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signUp' element={<Registration />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='/addPayment' element={<AddPaymentMethod />}/>
          <Route path='/addAddress' element={<AddAddress />} />
      </Route>
     </Routes>
     </Suspense>
    </div>
  )
}

export default App
