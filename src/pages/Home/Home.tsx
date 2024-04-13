import React from 'react'
import styled from 'styled-components'

import { socket } from '../../socket'
import { AddReport } from './AddReport'
import { useEvent } from '../../hooks/useEvent'
import { ReportFormPopup } from './ReportFormPopup'
import { Event } from '../../components/Events/Event'
import { ReportsTable } from '../../components/Reports/ReportsTable'

export const Home = () => {
  const [isAddReportPopupOpen, setIsAddReportPopupOpen] = React.useState(false)
  const { event } = useEvent()

  React.useEffect(() => {
    if (event) socket.on('connect', () => console.log(socket.id))

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <HomeStyle>
      <Event />
      {event && (
        <>
          <ReportsTable />
          <AddReport openAddReportPopup={() => setIsAddReportPopupOpen(true)} />
          <ReportFormPopup
            isOpen={isAddReportPopupOpen}
            handleClose={() => setIsAddReportPopupOpen(false)}
            title="הוספת דיווח"
            eventId={event.id}
          />
        </>
      )}
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
