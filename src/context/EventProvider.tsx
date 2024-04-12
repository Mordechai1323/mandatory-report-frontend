import React from 'react'
import { Event } from '../models/event'

type EventContextType = {
  event: Event | undefined
  changeEvent: (event: Event) => void
}

const EventContext = React.createContext<EventContextType>({
  event: undefined,
  changeEvent: () => {},
})

const getEvent = () => {
  const event = localStorage.getItem('event') ? JSON.parse(localStorage.getItem('event')!) : undefined
  return event
}

const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [event, setEvent] = React.useState<Event>(getEvent())

  const changeEvent = (event: Event) => {
    setEvent(event)
    localStorage.setItem('event', JSON.stringify(event))
  }

  return <EventContext.Provider value={{ event, changeEvent }}>{children}</EventContext.Provider>
}

export { EventProvider, EventContext }
