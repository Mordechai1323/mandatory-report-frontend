import { FilterData } from '../pages/Home/NavigationAndFilters/Filters/types'

const filterByTimeOptions = [
  { label: 'כל ההודעות', value: '' },
  { label: '12 שעות אחרונות', value: '12h' },
  { label: 'יום אחורה', value: '1d' },
  { label: 'יומיים אחורה', value: '2d' },
  { label: 'שלושה ימים אחורה', value: '3d' },
  { label: 'שבוע אחורה', value: '1w' },
  // { label: 'מותאם אישית', value: 'custom' },
]

export const filterByTime: FilterData = {
  value: 'time',
  label: 'חלון זמן',
  filterType: 'select',
  options: filterByTimeOptions,
}
