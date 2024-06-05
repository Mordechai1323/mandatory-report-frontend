import React from 'react'
import styled from 'styled-components'

import { FilterData } from './types'
import { FilterPopup } from './FilterPopup'
import openFilter from '../../../../assets/icons/openFilter.svg'
import { useClickOutSide } from '../../../../hooks/useClickOutSide'
import { useFilters } from '../../../../hooks/useFilters'

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
    } 
  }

  return (
    <FilterStyle ref={ref}>
      <FilterDetails onClick={() => setIsFilterPopupOpen((prev) => !prev)}>
        <span>{filter.label}</span>
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
`

const FilterDetails = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  & img {
    margin-right: 1rem;
  }

  & span {
    color: ${({ theme }) => theme.colors.gray};
  }
`
