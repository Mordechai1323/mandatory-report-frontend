import React from 'react'

import { DepartmentsContext } from '../context/DepartmentsProvider'

export const useDepartments = () => {
  const context = React.useContext(DepartmentsContext)
  if (!context) {
    throw new Error('useDepartments must be used within an DepartmentsContext')
  }
  return context
}
