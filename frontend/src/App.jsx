import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/auth/UserLogin'
import Home from './pages/Home'
import CaptainLogin from './pages/auth/CaptainLogin'
import CaptainSignup from './pages/auth/CaptainSignup'
import UserSignup from './pages/auth/UserSignup'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserSignup />} />

      <Route path='/captain/login' element={<CaptainLogin />} />
      <Route path='/captain/signup' element={<CaptainSignup />} />

    </Routes>
  )
}

export default App