import React from 'react'
import {useAuth} from '../components/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />
}

export default ProtectedRoute
