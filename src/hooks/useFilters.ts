import React from 'react'
import { FiltersContext } from '../context/FiltersProvider'

export const useFilters = () => {
  const context = React.useContext(FiltersContext)
  if (!context) {
    throw new Error('useFilters must be used within an FiltersProvider')
  }
  return context
}
