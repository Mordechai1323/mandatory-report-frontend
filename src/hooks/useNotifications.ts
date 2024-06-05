import React from 'react'
import { NotificationsContext } from '../context/NotificationsProvider'

export const useNotifications = () => {
  const context = React.useContext(NotificationsContext)
  if (!context) {
    throw new Error('useNotifications must be used within an NotificationsProvider')
  }
  return context
}
