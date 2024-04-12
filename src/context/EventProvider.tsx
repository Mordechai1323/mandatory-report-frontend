import React from 'react'
import { Event } from '../models/event'

type EventContextType = {
  event: Event | undefined
  setEvent: (event: Event) => void
}

const EventContext = React.createContext<EventContextType>({
  event: undefined,
  setEvent: () => {},
})

const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [event, setEvent] = React.useState<Event>({
    id: 10,
    name: '',
    isTraining: false,
    createdAt: '',
    updatedAt: '',
  })

  return <EventContext.Provider value={{ event, setEvent }}>{children}</EventContext.Provider>
}

export { EventProvider, EventContext }
