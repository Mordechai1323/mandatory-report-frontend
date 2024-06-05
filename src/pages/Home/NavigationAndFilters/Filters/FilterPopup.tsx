import styled from 'styled-components'

import { SelectOption } from './SelectOption'
import { CheckBoxOption } from './CheckBoxOption'
import { FilterData, FilterOption } from './types'
import { useFilters } from '../../../../hooks/useFilters'

interface FilterPopupProps {
  filter: FilterData
}

export const FilterPopup = ({ filter }: FilterPopupProps) => {
  const { changeFilter, filters, clearFilter } = useFilters()

  const onClickHandler = (option: FilterOption) => {
    changeFilter(filter.value, option)
  }

  const isCurrent = (options: FilterOption) => {
    if (filter.value === 'time') {
      return filters.time.label === options.label
    } else {
      return filters[filter.value].includes(options.value as number)
    }
  }

  return (
    <FilterPopupStyle>
      {!filter.options
        ? 'טוען נתונים...'
        : filter.options.map((option) =>
            filter.filterType === 'select' ? (
              <SelectOption
                key={option.label}
                option={option}
                onClickHandler={onClickHandler}
                isSelected={isCurrent(option)}
              />
            ) : (
              <CheckBoxOption
                key={option.label}
                option={option}
                onClickHandler={onClickHandler}
                isChecked={isCurrent(option)}
              />
            )
          )}
      <ClearFilterStyle onClick={() => clearFilter(filter.value)}>נקה סינון</ClearFilterStyle>
    </FilterPopupStyle>
  )
}

const FilterPopupStyle = styled.div`
  position: absolute;
  right: 0;
  top: 2rem;
  width: 10vw;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 1vh 0.5vw;
  z-index: 1;
`
const ClearFilterStyle = styled.div`
  display: flex;
  align-items: center;
  height: 3vh;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid #0000001a;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
`
