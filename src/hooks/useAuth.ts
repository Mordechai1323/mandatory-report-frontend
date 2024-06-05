import React from 'react'

import { AuthContext } from '../context/AuthProvider'

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthContext')
  }
  return context
}
