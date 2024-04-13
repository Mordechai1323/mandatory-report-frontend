import React from 'react'
import { useEvent } from './useEvent'
import { socket } from '../socket'
import { Report } from '../models/report'

export const useReports = () => {
  const [reports, setReports] = React.useState<Report[]>()
  const { event } = useEvent()

  React.useEffect(() => {
    socket.on('createReport', (report: Report) => {
      setReports((prevReports) => {
        return [report, ...(prevReports ?? [])]
      })
    })

    socket.on('updateReport', (updateReport: Report) => {
      setReports((prevReports) => {
        const updateReports = prevReports?.map((report) =>
          report.id === updateReport.id ? updateReport : report
        )

        return updateReports
      })
    })

    socket.on('deleteReport', (reportId: number) => {
      setReports((prevReports) => {
        return prevReports?.filter((report) => report.id !== reportId)
      })
    })

    return () => {
      socket.off('newReport')
      socket.off('updateReport')
      socket.off('deleteReport')
    }
  }, [socket])

  React.useEffect(() => {
    if (event) {
      socket.emit('joinRoom', event.id)
      socket.on('joinedRoomSuccessfully', (res) => {
        if (res === `Joined to room ${event.id} successfully`) {
          socket.emit('getReports', { eventId: event.id, page: 1 })
          socket.on('reports', (reports: Report[]) => {
            setReports(reports)
          })
        }
      })
    }

    return () => {
      socket.off('joinedRoomSuccessfully')
      socket.off('reports')
    }
  }, [event])

  return { reports, setReports }
}
