import styled from 'styled-components'

import { SelectOption } from './SelectOption'
import { CheckBoxOption } from './CheckBoxOption'
import { FilterData, FilterOption } from './types'
import { useFilters } from '../../../../hooks/useFilters'

interface FilterPopupProps {
  filter: FilterData
}

export const FilterPopup = ({ filter }: FilterPopupProps) => {
  const { changeFilter, filters } = useFilters()

  const onClickHandler = (option: FilterOption) => {
    changeFilter(filter.value, option)
  }

  const isCurrent = (options: FilterOption) => {
    if (filter.value === 'time') {
      return filters.time.label === options.label
    } else if (filter.value === 'sortBy') {
      return filters.sortBy.label === options.label
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
