import React from 'react'

import { socket } from '../socket'
import { useEvent } from './useEvent'
import { Report } from '../models/report'

export const useReports = () => {
  const [reports, setReports] = React.useState<Report[]>()
  const [, setPage] = React.useState(1)
  const [countPages, setCountPages] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoadingNexPage, setIsLoadingNexPage] = React.useState(false)

  const { event } = useEvent()

  const perPage = 10

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

    socket.on('reports', (reports: Report[]) => {
      setReports((prevState) => [...(prevState ?? []), ...reports])
    })

    return () => {
      socket.off('newReport')
      socket.off('updateReport')
      socket.off('deleteReport')
      socket.off('reports')
    }
  }, [socket])

  React.useEffect(() => {
    setReports(undefined)
    setPage(1)
    setIsLoading(true)
    if (event) {
      socket.emit('joinRoom', event.id)
      socket.on('joinedRoomSuccessfully', async (res) => {
        if (res === `Joined to room ${event.id} successfully`) {
          getReports()
          setIsLoading(false)
        }
      })
      socket.on('reportsCount', (count: number) => {
        setCountPages(Math.ceil(count / perPage))
      })
    }

    return () => {
      socket.off('joinedRoomSuccessfully')
      socket.off('reportsCount')
    }
  }, [event])

  const getReports = (page = 1) => {
    if (!event) return
    socket.emit('getReports', { eventId: event.id, page, perPage })
  }

  const getNextPage = () => {
    if (!event) return
    setPage((prevPage) => {
      if (prevPage === countPages) return prevPage
      setIsLoadingNexPage(true)
      const nextPage = prevPage + 1
      getReports(nextPage)
      setIsLoadingNexPage(false)

      return nextPage
    })
  }

  return { reports, setReports, getReports, getNextPage, isLoading, isLoadingNexPage }
}
