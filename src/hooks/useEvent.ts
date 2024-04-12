import React from 'react'
import { EventContext } from '../context/EventProvider'

export const useEvent = () => {
  const context = React.useContext(EventContext)
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider')
  }
  return context
}
