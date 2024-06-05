import React from 'react'
import styled from 'styled-components'

import { FilterData } from './types'
import { FilterPopup } from './FilterPopup'
import { useFilters } from '../../../../hooks/useFilters'
import openFilter from '../../../../assets/icons/openFilter.svg'
import { useClickOutSide } from '../../../../hooks/useClickOutSide'

interface FilterProps {
  filter: FilterData
}

export const Filter = ({ filter }: FilterProps) => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = React.useState(false)
  const { filters } = useFilters()

  const { ref } = useClickOutSide<HTMLDivElement>(() => setIsFilterPopupOpen(false))

  const filterLabel = () => {
    if (filter.value === 'time') {
      return filters.time.label !== 'כל ההודעות' ? filters.time.label : filter.label
    } else {
      if (filters[filter.value].length === 0) return filter.label
      return filters[filter.value]
        .map((filterValue) => filter.options?.find((option) => option.value === filterValue)?.label)
        .join(', ')
    }
  }

  return (
    <FilterStyle ref={ref}>
      <FilterDetails onClick={() => setIsFilterPopupOpen((prev) => !prev)}>
        <span>{filterLabel()}</span>
        <img src={openFilter} alt="open filter icon" />
      </FilterDetails>
      {isFilterPopupOpen && <FilterPopup filter={filter} />}
    </FilterStyle>
  )
}

const FilterStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 23%;
  height: 100%;
`

const FilterDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  height: 100%;
  width: 100%;

  & img {
    margin-right: 1rem;
  }

  & span {
    color: ${({ theme }) => theme.colors.gray};
    height: 100%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
