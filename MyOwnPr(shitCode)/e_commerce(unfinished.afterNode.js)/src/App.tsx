import { useState } from 'react'
import { LeftMenu } from './components/LeftMenu'
import { ProductList } from './components/ProductList'
import './app.scss'
import { Route, Routes } from 'react-router'
import { ProductInfo } from './components/ProductInfo'
import { Bag } from './components/Bag'
import { Modal } from './components/Modal'
import { ShippingData } from './components/ShippingData'

function App() {

  return (
    <div className="App">
     <LeftMenu />
     <Modal>
        <ShippingData />
     </Modal>
     <Routes>
      <Route path="/">
          <Route path='/main' element={<ProductList />}/>
          <Route path='/main/:id' element={<ProductInfo />} />
          <Route path='/bag' element={<Bag />}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
