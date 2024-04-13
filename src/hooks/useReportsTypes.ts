import React from 'react'

import { ReportsTypesContext } from '../context/ReportsTypesProvider'

export const useReportsTypes = () => {
  const context = React.useContext(ReportsTypesContext)
  if (!context) {
    throw new Error('useReportsTypes must be used within an ReportsTypesContext')
  }
  return context
}
