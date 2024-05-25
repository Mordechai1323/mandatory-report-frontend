import styled from 'styled-components'

import { SelectOption } from './SelectOption'
import { CheckBoxOption } from './CheckBoxOption'
import { filterOption } from '../../../../constants/filtersOptions'

interface FilterPopupProps {
  filter: filterOption
}

export const FilterPopup = ({ filter }: FilterPopupProps) => {
  return (
    <FilterPopupStyle>
      {filter.options.map((option, i) =>
        filter.filterType === 'select' ? (
          <SelectOption key={option} value={option} isSelected={i === 0} />
        ) : (
          <CheckBoxOption key={option} value={option} isChecked={i === 1}/>
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
