import React from 'react'
import styled from 'styled-components'

import { socket } from '../../socket'
import { useEvent } from '../../hooks/useEvent'
import { ReportFormPopup } from './ReportFormPopup'
import { useAddReport } from '../../hooks/useAddReport'
import { ReportsTable } from '../../components/Reports/ReportsTable'

export const Home = () => {
  const { isAddReportPopupOpen , closeAddReportPopup} = useAddReport()
  const { event } = useEvent()

  React.useEffect(() => {
    if (event) socket.on('connect', () => console.log(socket.id))

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <HomeStyle>
      {event && (
        <>
          <ReportsTable />
          {isAddReportPopupOpen && (
            <ReportFormPopup
              isOpen={isAddReportPopupOpen}
              handleClose={closeAddReportPopup}
              title="הוספת דיווח"
              eventId={event.id}
            />
          )}
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
