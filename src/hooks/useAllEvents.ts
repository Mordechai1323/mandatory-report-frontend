import React from 'react'

import { AllEventsContext } from '../context/AllEventsProvider'

export const useAllEvents = () => {
  const context = React.useContext(AllEventsContext)
  if (!context) {
    throw new Error('useAllEvents must be used within an AllEventsContext')
  }
  return context
}
