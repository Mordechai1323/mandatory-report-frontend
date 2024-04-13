import { ReportType } from '../models/reportType'
import { handlerError } from '../utils/handlerError'
import { axiosPrivate } from './api'

const fetchReportsTypes = async () => {
  try {
    const response = await axiosPrivate<ReportType[]>('/reportsTypes')

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const createReportType = async (reportType: ReportType) => {
  try {
    const response = await axiosPrivate.post<ReportType>('/reportsTypes', reportType)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const updateReportType = async (reportType: ReportType) => {
  try {
    const response = await axiosPrivate.put<ReportType>(
      `/reportsTypes/${reportType.id}`,
      reportType
    )

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const deleteReportType = async (id: number) => {
  try {
    const response = await axiosPrivate.delete<ReportType>(`/reportsTypes/${id}`)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

export { fetchReportsTypes, createReportType, updateReportType, deleteReportType }
