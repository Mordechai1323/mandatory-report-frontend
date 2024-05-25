import styled from 'styled-components'

import { Filter } from './Filter'
import { filtersOptions } from '../../../../constants/filtersOptions'

export const Filters = () => {
  return (
    <FiltersStyle>
      {filtersOptions.map((filter) => (
        <Filter key={filter.value} filter={filter} />
      ))}
    </FiltersStyle>
  )
}

const FiltersStyle = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`
