import React from 'react'

import { AddReportContext } from '../context/AddReportProvider'

export const useAddReport = () => {
  const context = React.useContext(AddReportContext)
  if (!context) {
    throw new Error('useAddReport must be used within an AddReportContext')
  }
  return context
}
