import { z } from 'zod'

export type Event = {
  id: number
  name: string
  isTraining: boolean
  createdAt: string
  updatedAt: string
}

export const eventSchema = z.object({
  name: z.string().trim().min(2).max(255),
  isTraining: z.boolean(),
})

export type EventForm = z.infer<typeof eventSchema>
