import React from "react"

import { Area } from "../models/area"
import { fetchAreas } from "../api/areas"
import { useQueryCustom } from "../hooks/useQueryCustom"



type AreasContextType = {
  areas: Area[] | undefined
}

const AreasContext = React.createContext<AreasContextType>({
  areas: undefined,
})

const AreasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: areas } = useQueryCustom(['areas'], fetchAreas)

  return <AreasContext.Provider value={{ areas }}>{children}</AreasContext.Provider>
}

export { AreasProvider, AreasContext }