export type filterOption = {
  value: string
  label: string
  filterType: 'select' | 'checkbox'
  options: string[]
}

export const filtersOptions: filterOption[] = [
  {
    value: 'time',
    label: 'חלון זמן',
    filterType: 'select',
    options: ['12 שעות אחרונות', 'יום אחורה', 'יומיים אחורה'],
  },
  {
    value: 'sort by',
    label: 'מיון לפי',
    filterType: 'select',
    options: ['שעת הדיווח', 'נושא הדיווח', 'הודעות חשובות'],
  },
  { value: 'area', label: 'זירה', filterType: 'checkbox', options: ['עזה', 'לבנון', 'סוריה'] },
  {
    value: 'department',
    label: 'מכלול מדווח',
    filterType: 'checkbox',
    options: ['מכלול 1', 'מכלול 2', 'מכלול 3'],
  },
  {
    value: 'reportType',
    label: 'מהות הדיווח',
    filterType: 'checkbox',
    options: ['דיווח מודיעיני', 'איסוף', 'מל”מ ומטרות'],
  },
]
