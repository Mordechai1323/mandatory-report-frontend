import React from 'react'

interface AlertState {
  isVisible: boolean
  message: string
  resolve: ((value: boolean) => void) | null
}

interface AlertContextType {
  alert: AlertState
  showAlert: (message: string) => Promise<boolean>
  confirmAlert: () => void
  cancelAlert: () => void
}

const AlertContext = React.createContext<AlertContextType | undefined>(undefined)

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlert] = React.useState<AlertState>({
    isVisible: false,
    message: '',
    resolve: null,
  })

  const showAlert = React.useCallback((message: string) => {
    return new Promise<boolean>((resolve) => {
      setAlert({ isVisible: true, message, resolve })
    })
  }, [])

  const hideAlert = React.useCallback(() => {
    setAlert({ isVisible: false, message: '', resolve: null })
  }, [])

  const confirmAlert = React.useCallback(() => {
    if (alert.resolve) alert.resolve(true)
    hideAlert()
  }, [alert, hideAlert])

  const cancelAlert = React.useCallback(() => {
    if (alert.resolve) alert.resolve(false)
    hideAlert()
  }, [alert, hideAlert])

  return (
    <AlertContext.Provider value={{ alert, showAlert, confirmAlert, cancelAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = (): AlertContextType => {
  const context = React.useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}
