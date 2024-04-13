import { z } from 'zod'
import { Area } from './area'
import { Department } from './department'
import { Event } from './event'
import { ReportType } from './reportType'

export type Report = {
  id: number
  content: string
  isImportant: boolean
  createdBy: string
  area: Area
  department: Department
  event: Event
  reportType: ReportType
  createdAt: string
  updatedAt: string
}

export const reportSchema = z.object({
  id: z.number().positive().optional(),
  content: z
    .string()
    .trim()
    .min(2, 'דיווח חייב להיות במינימום 2 תווים')
    .max(255, 'דיווח חייב להיות  במקסימום 255 תווים'),
  isImportant: z.boolean().default(false),
  areaId: z.number({ required_error: 'בחר זירה' }).positive('בחר זירה חוקית'),
  departmentId: z.number({ required_error: 'בחר מדור' }).positive('בחר מדור חוקי'),
  reportTypeId: z.number({ required_error: 'בחר מהוות הדיווח' }).positive('בחר מהוות הדיווח חוקי'),
})

export type ReportForm = z.infer<typeof reportSchema>
