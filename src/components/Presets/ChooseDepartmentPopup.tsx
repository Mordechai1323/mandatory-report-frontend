import styled from 'styled-components'

import { Department } from '../../models/department'
import { SelectOption } from '../../pages/Home/NavigationAndFilters/Filters/SelectOption'
import { useDepartments } from '../../hooks/useDepartments'
import { FilterOption } from '../../pages/Home/NavigationAndFilters/Filters/types'

interface ChooseDepartmentPopupProps {
  setDepartmentSelected: React.Dispatch<React.SetStateAction<Department | undefined>>
  departmentSelected: Department | undefined
  closePopup: () => void
}

export const ChooseDepartmentPopup = ({
  departmentSelected,
  setDepartmentSelected,
  closePopup,
}: ChooseDepartmentPopupProps) => {
  const { departments } = useDepartments()
  const onClickHandler = (option: FilterOption) => {
    setDepartmentSelected(departments?.find((department) => department.id === option.value))
    closePopup()
  }

  return (
    <ChooseDepartmentPopupStyle>
      {!departments
        ? 'טוען נתונים...'
        : departments.map((department) => (
            <SelectOption
              key={department.id}
              option={{ label: department.name, value: department.id }}
              onClickHandler={onClickHandler}
              isSelected={departmentSelected?.id === department.id}
            />
          ))}
    </ChooseDepartmentPopupStyle>
  )
}

const ChooseDepartmentPopupStyle = styled.div`
  position: absolute;
  /* right: 0; */
  top: 2rem;
  width: 10vw;
  min-width: 12rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 1vh 0.8vw;
  z-index: 1;
`
