import { handlerError } from '../utils/handlerError'
import { axiosPrivate } from './axios'

const fetchData = async <T>(listName: string) => {
  try {
    const response = await axiosPrivate<T[]>(`/${listName}`)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const createItem = async <T>(listName: string, item: T) => {
  try {
    const response = await axiosPrivate.post<T>(`/${listName}`, item)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const updateItem = async <T extends { id: number }>(listName: string, item: T) => {
  try {
    const response = await axiosPrivate.put<T>(`/${listName}/${item.id}`, item)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const deleteItem = async <T>(listName: string, id: number) => {
  try {
    const response = await axiosPrivate.delete<T>(`/${listName}/${id}`)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

export { fetchData, createItem, updateItem, deleteItem }
