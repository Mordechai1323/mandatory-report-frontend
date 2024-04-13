import React from 'react'

import { Event } from '../models/event'
import { fetchEvents } from '../api/events'
import { useQueryCustom } from '../hooks/useQueryCustom'

type AllEventsContextType = {
  allEvents: Event[] | undefined
}

const AllEventsContext = React.createContext<AllEventsContextType>({
  allEvents: undefined,
})

const AllEventsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: allEvents } = useQueryCustom(['events'], fetchEvents)

  return <AllEventsContext.Provider value={{ allEvents }}>{children}</AllEventsContext.Provider>
}

export { AllEventsProvider, AllEventsContext }
