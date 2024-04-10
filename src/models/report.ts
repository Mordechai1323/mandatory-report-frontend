import { Area } from './area'
import { Department } from './department'
import { Event } from './event'
import { ReportsType } from './reportType'

export type Report = {
  id: number
  content: string
  isImportant: boolean
  createdBy: string
  area: Area
  department: Department
  event: Event
  reportType: ReportsType
  createdAt: string
  updatedAt: string
}
