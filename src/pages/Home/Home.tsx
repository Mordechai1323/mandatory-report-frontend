import React from 'react'
import styled from 'styled-components'

import { socket } from '../../socket'
import { useEvent } from '../../hooks/useEvent'
import { ReportFormPopup } from './ReportFormPopup'
import { useAddReport } from '../../hooks/useAddReport'
import { NavigationAndFilters } from './NavigationAndFilters/NavigationAndFilters'
import { ReportsTable } from '../../components/Reports/ReportsTable'
import { NoEventChoose } from '../../components/Events/NoEventChoose'

export const Home = () => {
  const { isAddReportPopupOpen, closeAddReportPopup } = useAddReport()
  const { event } = useEvent()

  React.useEffect(() => {
    if (event) socket.on('connect', () => console.log(socket.id))

    return () => {
      socket.disconnect()
    }
  }, [])

  if (!event) return <NoEventChoose />

  return (
    <HomeStyle>
      <NavigationAndFilters />
      <ReportsTable />
      {isAddReportPopupOpen && (
        <ReportFormPopup
          isOpen={isAddReportPopupOpen}
          handleClose={closeAddReportPopup}
          title="הוספת דיווח"
          eventId={event.id}
        />
      )}
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
