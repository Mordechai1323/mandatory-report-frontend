import React from 'react'
import { Report } from '../models/report'

export type Notification = {
  report: Report
  type: 'newReport' | 'deleteReport'
}

type NotificationsContextType = {
  isMuted: boolean
  addNotification: (notification: Notification) => void
  removeNotification: () => void
  getNextNotification: () => Notification | null
  toggleMuteNotifications: () => void
}

const NotificationsContext = React.createContext<NotificationsContextType>({
  isMuted: true,
  addNotification: () => {},
  removeNotification: () => {},
  getNextNotification: () => null,
  toggleMuteNotifications: () => {},
})

const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queue, setQueue] = React.useState<Notification[]>([])
  const [isMuted, setIsMuted] = React.useState(() => {
    const savedState = localStorage.getItem('notificationsMuted')
    return savedState !== 'false'
  })

  const addNotification = (notification: Notification) => {
    setQueue((prevQueue) => [...prevQueue, notification])
  }

  const removeNotification = () => {
    setQueue((prevQueue) => prevQueue.slice(1))
  }

  const getNextNotification = () => {
    if (queue.length === 0) return null
    return queue[0]
  }

  const toggleMuteNotifications = () => {
    setIsMuted((prevMuted) => {
      const isMuted = !prevMuted
      localStorage.setItem('notificationsMuted', JSON.stringify(isMuted))

      return isMuted
    })
  }

  return (
    <NotificationsContext.Provider
      value={{
        addNotification,
        removeNotification,
        isMuted,
        toggleMuteNotifications,
        getNextNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export { NotificationsProvider, NotificationsContext }
