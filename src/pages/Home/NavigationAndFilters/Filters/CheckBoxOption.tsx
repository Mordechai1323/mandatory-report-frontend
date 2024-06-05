import styled from 'styled-components'

import { FilterOption } from './types'

interface CheckBoxOptionProps {
  option: FilterOption
  isChecked: boolean
  onClickHandler: (option: FilterOption) => void
}

export const CheckBoxOption = ({ isChecked, option, onClickHandler }: CheckBoxOptionProps) => {
  return (
    <CheckBoxOptionStyle $isChecked={isChecked}>
      <input
        type="checkbox"
        id={option.label}
        checked={isChecked}
        onChange={() => onClickHandler(option)}
      />
      <label htmlFor={option.label}>{option.label}</label>
    </CheckBoxOptionStyle>
  )
}

const CheckBoxOptionStyle = styled.div<{ $isChecked: boolean }>`
  display: flex;
  align-items: center;
  height: 3.5vh;
  margin: 1vh 0;
  cursor: pointer;

  input[type='checkbox'] {
    transform: scale(1.2);
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  & label {
    color: ${({ theme, $isChecked }) => ($isChecked ? theme.colors.primary : theme.colors.gray)};
    margin-right: 8px;
    cursor: pointer;
    width: 88%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
