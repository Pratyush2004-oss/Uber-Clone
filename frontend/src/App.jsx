import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserLogin from './pages/auth/UserLogin'
import Home from './pages/Home'
import CaptainLogin from './pages/auth/CaptainLogin'
import CaptainSignup from './pages/auth/CaptainSignup'
import UserSignup from './pages/auth/UserSignup'
import Dashboard from './pages/dashboard'
import { useUserStore } from './store/user.store'

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated && !user) {
    return <Navigate to={'/user/login'} replace />;
  }
  return children;
}

const RedirectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useUserStore();
  if (isAuthenticated && user) {
    return <Navigate to={'/dashboard'} replace />;
  }
  return children;
}

const App = () => {
  const { user, checkUser, isAuthenticated } = useUserStore();
  useEffect(() => {
    if (!isAuthenticated && !user) {
      checkUser();
    }
  }, [checkUser])
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