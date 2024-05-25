import { FilterData } from '../pages/Home/FiltersAndTabs/Filters/types'

const filterByTimeOptions = [
  { label: 'כל ההודעות', value: '' },
  { label: '12 שעות אחרונות', value: '12h' },
  { label: 'יום אחורה', value: '1d' },
  { label: 'יומיים אחורה', value: '2d' },
  { label: 'שלושה ימים אחורה', value: '3d' },
  { label: 'שבוע אחורה', value: '1w' },
  // { label: 'מותאם אישית', value: 'custom' },
]

const sortByOptions = [
  { label: 'שעת הדיווח', value: 'updatedAt' },
  { label: 'נושא הדיווח', value: 'content' },
  { label: 'הודעות חשובות', value: 'isImportant' },
]

export const filterByTime: FilterData = {
  value: 'time',
  label: 'חלון זמן',
  filterType: 'select',
  options: filterByTimeOptions,
}

export const sortBy: FilterData = {
  value: 'sortBy',
  label: 'מיון לפי',
  filterType: 'select',
  options: sortByOptions,
}
