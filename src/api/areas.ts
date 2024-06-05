import { axiosPrivate } from './axios'
import { Area } from '../models/area'
import { handlerError } from '../utils/handlerError'

const fetchAreas = async () => {
  try {
    const response = await axiosPrivate<Area[]>('/areas')

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const createArea = async (area: Area) => {
  try {
    const response = await axiosPrivate.post<Area>('/areas', area)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const updateArea = async (area: Area) => {
  try {
    const response = await axiosPrivate.put<Area>(`/areas/${area.id}`, area)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const deleteArea = async (id: number) => {
  try {
    const response = await axiosPrivate.delete<Area>(`/areas/${id}`)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

export { fetchAreas, createArea, updateArea, deleteArea }
