import { Department } from '../models/department'
import { handlerError } from '../utils/handlerError'
import { axiosPrivate } from './axios'

const fetchDepartments = async () => {
  try {
    const response = await axiosPrivate<Department[]>('/departments')

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const createDepartment = async (department: Department) => {
  try {
    const response = await axiosPrivate.post<Department>('/departments', department)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const updateDepartment = async (department: Department) => {
  try {
    const response = await axiosPrivate.put<Department>(`/departments/${department.id}`, department)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

const deleteDepartment = async (id: number) => {
  try {
    const response = await axiosPrivate.delete<Department>(`/departments/${id}`)

    return response.data
  } catch (error) {
    handlerError(error)
  }
}

export { fetchDepartments, createDepartment, updateDepartment, deleteDepartment }
