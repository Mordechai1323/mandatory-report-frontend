import React from 'react'

import { Department } from '../models/department'
import { fetchDepartments } from '../api/departments'
import { useQueryCustom } from '../hooks/useQueryCustom'

type DepartmentsContextType = {
  departments: Department[] | undefined
}

const DepartmentsContext = React.createContext<DepartmentsContextType>({
  departments: undefined,
})

const DepartmentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: departments } = useQueryCustom(['departments'], fetchDepartments)

  return <DepartmentsContext.Provider value={{ departments }}>{children}</DepartmentsContext.Provider>
}

export { DepartmentsProvider, DepartmentsContext }
