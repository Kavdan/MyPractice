import { useState } from 'react'
import { Signin } from './pages/Signin'
import './app.scss'
import { Signup } from './pages/Signup'
import { Header } from './pages/Header'
import { Route, Routes } from 'react-router'
import { Main } from './pages/Main'
import { PrivateRoute } from './components/PrivateRoute'


function App() {
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/' element={<PrivateRoute>
          <Main />
        </PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App
