import { Event } from '../models/event'
import { handlerError } from '../utils/handlerError'
import { axiosPrivate } from './api'

const fetchEvents = async () => {
  try {
    const response = await axiosPrivate<Event[]>('/events')

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const createEvent = async (event: Event) => {
  try {
    const response = await axiosPrivate.post<Event>('/events', event)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const updateEvent = async (event: Event) => {
  try {
    const response = await axiosPrivate.put<Event>(`/events/${event.id}`, event)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const deleteEvent = async (id: string) => {
  try {
    const response = await axiosPrivate.delete<Event>(`/events/${id}`)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

export { fetchEvents, createEvent, updateEvent, deleteEvent }
