import React from 'react'
import styled from 'styled-components'

import { FilterData } from './types'
import { FilterPopup } from './FilterPopup'
import openFilter from '../../../../assets/icons/openFilter.svg'
import { useClickOutSide } from '../../../../hooks/useClickOutSide'

interface FilterProps {
  filter: FilterData
}

export const Filter = ({ filter }: FilterProps) => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = React.useState(false)

  const { ref } = useClickOutSide<HTMLDivElement>(() => setIsFilterPopupOpen(false))

  return (
    <FilterStyle ref={ref}>
      <FilterDetails onClick={() => setIsFilterPopupOpen((prev) => !prev)}>
        <span>{filter.label}</span>
        <img src={openFilter} alt="open filter icon" />
      </FilterDetails>
      {isFilterPopupOpen && <FilterPopup filter={filter}  />}
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
