import { z } from 'zod'

export const presetSchema = z.object({
  id: z.number().positive().optional(),
  content: z
    .string()
    .trim()
    .min(2, 'דיווח חייב להיות במינימום 2 תווים')
    .max(255, 'דיווח חייב להיות  במקסימום 255 תווים'),
  departmentId: z.number({ required_error: 'בחר מדור' }).positive('בחר מדור חוקי'),
})

export type Preset = z.infer<typeof presetSchema>
