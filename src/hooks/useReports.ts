import React from 'react'

import { socket } from '../socket'
import { useEvent } from './useEvent'
import { Report } from '../models/report'
import { useNotifications } from './useNotifications'

export const useReports = () => {
  const [reports, setReports] = React.useState<Report[]>()
  const [, setPage] = React.useState(1)
  const [countPages, setCountPages] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoadingNexPage, setIsLoadingNexPage] = React.useState(false)
  const { isMuted, addNotification } = useNotifications()

  const { event } = useEvent()

  const perPage = 10

  React.useEffect(() => {
    const handleCreateReport = (newReport: Report) => {
      if (!newReport.id) return

      setReports((prevReports) => [newReport, ...(prevReports ?? [])])
      if (!isMuted /* check if  report.createdBy  !== auth.uniqID*/)
        addNotification({ report: newReport, type: 'newReport' })
    }

    const handleUpdateReport = (updatedReport: Report) => {
      if (!updatedReport.id) return

      setReports((prevReports) => {
        return prevReports?.map((report) =>
          report.id === updatedReport.id ? updatedReport : report
        )
      })
    }

    const handleDeleteReport = (deletedReport: Report) => {
      if (!deletedReport.id) return

      setReports((prevReports) => prevReports?.filter((report) => report.id !== deletedReport.id))
      addNotification({ report: deletedReport, type: 'deleteReport' })
    }

    const handleInitialReports = (initialReports: Report[]) => {
      setReports((prevState) => [...(prevState ?? []), ...initialReports])
    }

    socket.on('createReport', handleCreateReport)
    socket.on('updateReport', handleUpdateReport)
    socket.on('deleteReport', handleDeleteReport)
    socket.on('reports', handleInitialReports)

    // Cleanup on component unmount
    return () => {
      socket.off('createReport', handleCreateReport)
      socket.off('updateReport', handleUpdateReport)
      socket.off('deleteReport', handleDeleteReport)
      socket.off('reports', handleInitialReports)
    }
  }, [addNotification, isMuted, socket])

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

  return {
    reports,
    setReports,
    getReports,
    getNextPage,
    isLoading,
    isLoadingNexPage,
  }
}
