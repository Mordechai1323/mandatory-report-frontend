import styled from 'styled-components'

interface CheckBoxOptionProps {
  value: string
  isChecked: boolean
}

export const CheckBoxOption = ({ isChecked, value }: CheckBoxOptionProps) => {
  return (
    <CheckBoxOptionStyle $isChecked={isChecked}>
      <input type="checkbox" id="filterCheckbox" checked={isChecked} />
      <label htmlFor="filterCheckbox">{value}</label>
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
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
