import { Report } from "../../../../models/report"

export type Filters = {
    time: FilterTime
    area: number[]
    department: number[]
    reportType: number[]
  }
  
  type FilterTime = {
    label: string
    value: { from: string; to: string }
  }
  
 export type FiltersContextType = {
    filters: Filters
    changeFilter: (filterType: keyof Filters, filter: FilterOption) => void
    clearFilter: (filterType: keyof Filters) => void
    isReportInFilters(report: Report): boolean
  }

  export type FilterData = {
    label: string
    value: keyof Filters
    filterType: FilterType
    options: FilterOption[] | undefined
  }
  
  type FilterType = 'select' | 'checkbox'
  
  export type FilterOption = { label: string; value: string | number}