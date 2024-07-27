import styled from 'styled-components'

import { FilterOption } from './types'

interface SelectOptionProps {
  option: FilterOption
  isSelected?: boolean
  onClickHandler: (option: FilterOption) => void
}

export const SelectOption = ({ isSelected = false, option, onClickHandler }: SelectOptionProps) => {
  return (
    <SelectOptionStyle $isSelected={isSelected} onClick={() => onClickHandler(option)}>
      <div className="border"></div>
      <span>{option.label}</span>
    </SelectOptionStyle>
  )
}

const SelectOptionStyle = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  height: 3.5vh;
  margin: 1vh 0;
  cursor: pointer;

  & .border {
    height: 100%;
    width: 2px;
    background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary : 'none')};
  }

  & span {
    color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary : theme.colors.gray)};
    margin-right: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
