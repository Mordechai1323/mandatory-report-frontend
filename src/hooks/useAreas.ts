import React from 'react'

import { AreasContext } from '../context/AreasProvider'

export const useAreas = () => {
  const context = React.useContext(AreasContext)
  if (!context) {
    throw new Error('useAreas must be used within an AreasContext')
  }
  return context
}
