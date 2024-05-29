import styled from 'styled-components'

import { Filter } from './Filter'
import { useAreas } from '../../../../hooks/useAreas'
import { useDepartments } from '../../../../hooks/useDepartments'
import { useReportsTypes } from '../../../../hooks/useReportsTypes'
import { filterByTime } from '../../../../constants/filtersOptions'

export const Filters = () => {
  const { areas } = useAreas()
  const { departments } = useDepartments()
  const { reportsTypes } = useReportsTypes()

  return (
    <FiltersStyle>
      <Filter filter={filterByTime} />
      <Filter
        filter={{
          value: 'area',
          label: 'זירה',
          filterType: 'checkbox',
          options: areas?.map((area) => ({
            label: area.name,
            value: area.id,
          })),
        }}
      />
      <Filter
        filter={{
          value: 'department',
          label: 'מכלול מדווח',
          filterType: 'checkbox',
          options: departments?.map((department) => ({
            label: department.name,
            value: department.id,
          })),
        }}
      />
      <Filter
        filter={{
          value: 'reportType',
          label: 'מהות הדיווח',
          filterType: 'checkbox',
          options: reportsTypes?.map((reportType) => ({
            label: reportType.name,
            value: reportType.id,
          })),
        }}
      />
    </FiltersStyle>
  )
}

const FiltersStyle = styled.div`
  width: 35%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`
