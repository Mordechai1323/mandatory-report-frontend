import styled from 'styled-components'

interface SelectOptionProps {
  value: string
  isSelected: boolean
}

export const SelectOption = ({ isSelected, value }: SelectOptionProps) => {
  return (
    <SelectOptionStyle $isSelected={isSelected}>
      <div className="border"></div>
      <span>{value}</span>
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
