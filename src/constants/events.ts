export const eventsTypes = ['חירום', 'תרגיל'] as const
export type EventType = (typeof eventsTypes)[number]


