import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserLogin from './pages/auth/UserLogin'
import Home from './pages/Home'
import CaptainLogin from './pages/auth/CaptainLogin'
import CaptainSignup from './pages/auth/CaptainSignup'
import UserSignup from './pages/auth/UserSignup'
import Dashboard from './pages/dashboard'

const ProtectRoute = ({ children }) => {
  const token = localStorage.getItem("Ubertoken")
  if (!token) {
    return <Navigate to={'/user/login'} replace />;
  }
  return children;
}

const RedirectedRoute = ({ children }) => {
  const token = localStorage.getItem("Ubertoken")
  if (token) {
    return <Navigate to={'/dashboard'} replace />
  }
  return children;
}

const App = () => {
  useEffect(() => {
    localStorage.getItem("Ubertoken")

  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={
        <ProtectRoute>
          <Dashboard />
        </ProtectRoute>
      } />
      <Route path='/user/login' element={
        <RedirectedRoute>
          <UserLogin />
        </RedirectedRoute>
      } />
      <Route path='/user/signup' element={
        <RedirectedRoute>
          <UserSignup />
        </RedirectedRoute>
      } />

      <Route path='/captain/login' element={
        <RedirectedRoute>
          <CaptainLogin />
        </RedirectedRoute>
      } />
      <Route path='/captain/signup' element={
        <RedirectedRoute>
          <CaptainSignup />
        </RedirectedRoute>
      } />

    </Routes>
  )
}

export default App