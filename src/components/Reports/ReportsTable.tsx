import React from 'react'
import styled from 'styled-components'
import { Socket, io } from 'socket.io-client'

import { BASE_URL } from '../../api/api'
import { ReportItem } from './ReportItem'
import { Report } from '../../models/report'
import { useEvent } from '../../hooks/useEvent'
import { ReportsHeader } from './ReportsHeader'

export const ReportsTable = () => {
  const [reports, setReports] = React.useState<Report[]>()
  const { event } = useEvent()
  const socket: Socket = io(BASE_URL)

  React.useEffect(() => {
    if (event) {
      socket.on('connect', () => console.log(socket.id))
      socket.emit('joinRoom', event.id)
      socket.on('joinedRoomSuccessfully', (res) => {
        if (res === `Joined to room ${event.id} successfully`) {
          socket.emit('getReports', { eventId: event.id, page: 1 })
          socket.on('reports', (reports: Report[]) => {
            console.log(reports)

            setReports(reports)
          })
        }
      })
    }

    return () => {
      socket.disconnect()
    }
  }, [event])

  return (
    <ReportsTableStyle>
      <ReportsHeader />
      {reports?.map((report) => {
        return <ReportItem report={report} key={report.id} />
      })}
    </ReportsTableStyle>
  )
}

const ReportsTableStyle = styled.div`
  width: 90%;
  height: 90%;
  overflow: auto;
`
