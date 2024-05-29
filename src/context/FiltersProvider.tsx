import React from 'react'
import moment, { DurationInputArg2 } from 'moment'

import {
  FilterOption,
  Filters,
  FiltersContextType,
} from '../pages/Home/FiltersAndTabs/Filters/types'

const initialFilter: Filters = {
  time: { label: 'כל ההודעות', value: { from: '', to: '' } },
  area: [],
  department: [],
  reportType: [],
}

const FiltersContext = React.createContext<FiltersContextType>({
  filters: initialFilter,
  changeFilter: () => {},
})

const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters>(initialFilter)

  const changeFilter = (filterType: keyof Filters, filterOption: FilterOption) => {
    setFilters((prev) => {
      if (filterType === 'time') {
        const value = parseInt((filterOption.value as string).slice(0, -1), 10)
        const unit = (filterOption.value as string).slice(-1)

        const from =
          filterOption.value !== '12h'
            ? moment()
                .subtract(value, unit as DurationInputArg2)
                .startOf('day')
                .toISOString()
            : moment()
                .subtract(value, unit as DurationInputArg2)
                .toISOString()

        return {
          ...prev,
          time: {
            label: filterOption.label,
            value:
              filterOption.value === ''
                ? { from: '', to: '' }
                : { from, to: moment().toISOString() },
          },
        }
      } else {
        if (prev[filterType].includes(filterOption.value as number)) {
          return {
            ...prev,
            [filterType]: prev[filterType].filter((item) => item !== filterOption.value),
          }
        } else {
          return {
            ...prev,
            [filterType]: [...prev[filterType], filterOption.value],
          }
        }
      }
    })
  }
  return (
    <FiltersContext.Provider value={{ filters, changeFilter }}>{children}</FiltersContext.Provider>
  )
}

export { FiltersProvider, FiltersContext }
