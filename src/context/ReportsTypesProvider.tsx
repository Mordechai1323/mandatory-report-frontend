import React from "react"

import { ReportType } from "../models/reportType"
import { fetchReportsTypes } from "../api/reportsTypes"
import { useQueryCustom } from "../hooks/useQueryCustom"


type ReportsTypesContextType = {
  reportsTypes: ReportType[] | undefined
}

const ReportsTypesContext = React.createContext<ReportsTypesContextType>({
  reportsTypes: undefined,
})

const ReportsTypesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: reportsTypes } = useQueryCustom(['reportsTypes'], fetchReportsTypes)

  return <ReportsTypesContext.Provider value={{ reportsTypes }}>{children}</ReportsTypesContext.Provider>
}

export { ReportsTypesProvider, ReportsTypesContext }