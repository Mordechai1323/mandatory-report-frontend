import React from 'react'

type AddReportContextType = {
  isAddReportPopupOpen: boolean
  openAddReportPopup: () => void
  closeAddReportPopup: () => void
}

const AddReportContext = React.createContext<AddReportContextType>({
  isAddReportPopupOpen: false,
  openAddReportPopup: () => {},
  closeAddReportPopup: () => {},
})

const AddReportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAddReportPopupOpen, setIsAddReportPopupOpen] = React.useState(false)

  const openAddReportPopup = () => setIsAddReportPopupOpen(true)
  const closeAddReportPopup = () => setIsAddReportPopupOpen(false)

  return (
    <AddReportContext.Provider
      value={{ isAddReportPopupOpen, closeAddReportPopup, openAddReportPopup }}
    >
      {children}
    </AddReportContext.Provider>
  )
}

export { AddReportProvider, AddReportContext }
