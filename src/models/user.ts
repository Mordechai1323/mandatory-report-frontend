import { z } from 'zod'

export const userSchema = z.object({
  id: z.number().positive().optional(),
  name: z.string().trim().min(2).max(255),
  userName: z.string().trim().min(2).max(255),
  classification: z.number(),
  email: z.string().email(),
  displayName: z.string().trim().min(2).max(255),
  role: z.number().optional(),

})

export type User = z.infer<typeof userSchema>
